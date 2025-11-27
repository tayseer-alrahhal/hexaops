"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

type ParticleRefs = {
    particles?: THREE.Points;
    geometry?: THREE.BufferGeometry;
};

export default function HexaOpsParticles() {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const refs = useRef<ParticleRefs>({});
    const animRef = useRef<number | null>(null);
    const stateRef = useRef<"sphere" | "text">("sphere");
    const morphProgressRef = useRef(0); // 0..1 transition progress
    const targetPositionsRef = useRef<Float32Array | null>(null);
    const spherePositionsRef = useRef<Float32Array | null>(null);
    const COUNT = 8000; // عدّل للآداء/الدقة

    useEffect(() => {
        let scene: THREE.Scene;
        let camera: THREE.PerspectiveCamera;
        let renderer: THREE.WebGLRenderer;
        let width = window.innerWidth;
        let height = window.innerHeight;

        function init() {
            scene = new THREE.Scene();
            camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
            camera.position.z = 25;

            renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
            renderer.setSize(width, height);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

            if (containerRef.current) {
                containerRef.current.appendChild(renderer.domElement);
            }

            createParticles();
            window.addEventListener("resize", onResize, { passive: true });
            window.addEventListener("scroll", onScroll, { passive: true });
            animate();
        }

        function sphericalDistribution(i: number) {
            const phi = Math.acos(-1 + (2 * i) / COUNT);
            const theta = Math.sqrt(COUNT * Math.PI) * phi;
            return {
                x: 8 * Math.cos(theta) * Math.sin(phi),
                y: 8 * Math.sin(theta) * Math.sin(phi),
                z: 8 * Math.cos(phi),
            };
        }

        function createParticles() {
            const geometry = new THREE.BufferGeometry();
            const positions = new Float32Array(COUNT * 3);
            const colors = new Float32Array(COUNT * 3);

            for (let i = 0; i < COUNT; i++) {
                const p = sphericalDistribution(i);
                positions[i * 3] = p.x + (Math.random() - 0.5) * 0.6;
                positions[i * 3 + 1] = p.y + (Math.random() - 0.5) * 0.6;
                positions[i * 3 + 2] = p.z + (Math.random() - 0.5) * 0.6;

                const depth = Math.sqrt(p.x * p.x + p.y * p.y + p.z * p.z) / 8;
                const color = new THREE.Color();
                color.setHSL(0.55 + depth * 0.15, 0.7, 0.45 + depth * 0.2);

                colors[i * 3] = color.r;
                colors[i * 3 + 1] = color.g;
                colors[i * 3 + 2] = color.b;
            }

            geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
            geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

            const material = new THREE.PointsMaterial({
                size: 0.09,
                vertexColors: true,
                transparent: true,
                opacity: 0.95,
                blending: THREE.AdditiveBlending,
                sizeAttenuation: true,
            });

            const points = new THREE.Points(geometry, material);
            scene.add(points);

            refs.current.particles = points;
            refs.current.geometry = geometry;

            // حفظ مواضع الكرة الأصلية لمرحلة العودة
            spherePositionsRef.current = new Float32Array(geometry.attributes.position.array.length);
            spherePositionsRef.current.set(geometry.attributes.position.array as Float32Array);
        }

        function createTextPoints(text: string) {
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d")!;
            const fontSize = 160;
            const padding = 40;

            ctx.font = `bold ${fontSize}px Arial`;
            const metrics = ctx.measureText(text);
            const textWidth = Math.ceil(metrics.width);
            const textHeight = fontSize;

            canvas.width = textWidth + padding * 2;
            canvas.height = textHeight + padding * 2;

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = "white";
            ctx.font = `bold ${fontSize}px Arial`;
            ctx.textBaseline = "middle";
            ctx.textAlign = "center";
            ctx.fillText(text, canvas.width / 2, canvas.height / 2);

            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const pixels = imageData.data;
            const points: { x: number; y: number }[] = [];
            const threshold = 150;

            for (let i = 0; i < pixels.length; i += 4) {
                if (pixels[i] > threshold) {
                    const x = (i / 4) % canvas.width;
                    const y = Math.floor((i / 4) / canvas.width);
                    // تقليل النقاط عشوائياً لتحكم بالكمية
                    if (Math.random() < 0.22) {
                        points.push({
                            x: (x - canvas.width / 2) / (fontSize / 12),
                            y: -(y - canvas.height / 2) / (fontSize / 12),
                        });
                    }
                }
            }

            return points;
        }

        // يحضّر targetPositionsRef بناءً على نص ثابت HexaOps
        function prepareTextTargets(text = "HexaOps") {
            const pts = createTextPoints(text);
            const target = new Float32Array(COUNT * 3);

            for (let i = 0; i < COUNT; i++) {
                if (i < pts.length) {
                    target[i * 3] = pts[i].x;
                    target[i * 3 + 1] = pts[i].y;
                    target[i * 3 + 2] = 0;
                } else {
                    const angle = Math.random() * Math.PI * 2;
                    const radius = Math.random() * 20 + 10;
                    target[i * 3] = Math.cos(angle) * radius;
                    target[i * 3 + 1] = Math.sin(angle) * radius;
                    target[i * 3 + 2] = (Math.random() - 0.5) * 10;
                }
            }

            targetPositionsRef.current = target;
        }

        // تغير الحالة إلى نص وتبدأ ال morph (بدون gsap)
        function startMorphToText() {
            if (!refs.current.geometry) return;
            if (stateRef.current === "text") return;
            stateRef.current = "text";
            morphProgressRef.current = 0;
            if (!targetPositionsRef.current) prepareTextTargets("HexaOps");
        }

        function startMorphToSphere() {
            if (!refs.current.geometry) return;
            if (stateRef.current === "sphere") return;
            stateRef.current = "sphere";
            morphProgressRef.current = 0;
        }

        function onScroll() {
            const scrollY = window.scrollY || window.pageYOffset;
            if (scrollY > 20) {
                startMorphToText();
            } else {
                startMorphToSphere();
            }
        }

        function animate() {
            animRef.current = requestAnimationFrame(animate);

            // دوران خفيف للكرة فقط عندما في حالة sphere
            if (refs.current.particles && stateRef.current === "sphere") {
                refs.current.particles.rotation.y += 0.0025;
            }

            // خطوة morph مشتركة: نزيد progress ونطبق lerp على مواضع البافر
            if (refs.current.geometry) {
                const posAttr = refs.current.geometry.getAttribute("position") as THREE.BufferAttribute;
                const positions = posAttr.array as Float32Array;

                const startPositions =
                    stateRef.current === "text" ? (spherePositionsRef.current as Float32Array) : (targetPositionsRef.current as Float32Array) || spherePositionsRef.current!;

                const endPositions =
                    stateRef.current === "text" ? (targetPositionsRef.current as Float32Array) : (spherePositionsRef.current as Float32Array);

                // زيادة الprogress بسرعة قابلة للتعديل
                morphProgressRef.current += 0.02; // كل فريم يزيد؛ عدله للسرعة
                if (morphProgressRef.current > 1) morphProgressRef.current = 1;

                const t = morphProgressRef.current;
                for (let i = 0; i < positions.length; i++) {
                    // lerp بين start and end
                    const s = startPositions[i];
                    const e = endPositions[i];
                    positions[i] = s + (e - s) * t;
                }

                posAttr.needsUpdate = true;

                // إذا وصلنا النهاية ولم نعد بحاجة للتحديث الكبير، إبقى progress ثابت
                if (morphProgressRef.current === 1) {
                    // nothing extra
                }
            }

            // render
            if (containerRef.current) {
                const canvas = containerRef.current.querySelector("canvas") as HTMLCanvasElement | null;
                if (canvas) {
                    // safe render guard
                    (renderer as THREE.WebGLRenderer).render(scene, camera);
                }
            }
        }

        function onResize() {
            width = window.innerWidth;
            height = window.innerHeight;
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height);
        }

        init();

        return () => {
            // cleanup
            if (animRef.current) cancelAnimationFrame(animRef.current);
            window.removeEventListener("resize", onResize);
            window.removeEventListener("scroll", onScroll);

            if (refs.current.particles) {
                scene.remove(refs.current.particles);
                refs.current.geometry?.dispose();
                (refs.current.particles.material as THREE.Material).dispose();
            }

            // remove canvas
            if (containerRef.current) {
                while (containerRef.current.firstChild) {
                    containerRef.current.removeChild(containerRef.current.firstChild);
                }
            }

            // dispose renderer
            try {
                // @ts-ignore
                renderer.forceContextLoss && renderer.forceContextLoss();
            } catch (e) {
                // ignore
            }
        };
    }, []);

    return <div ref={containerRef} style={{ width: "100%", height: "100vh", position: "relative" }} />;
}
