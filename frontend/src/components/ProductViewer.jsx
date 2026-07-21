import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import './ProductViewer.css'

function ProductViewer({ onColorChange }) {
  const containerRef = useRef(null)
  const sceneRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x0D1B2A)

    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    )
    camera.position.z = 2.5

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
    renderer.setPixelRatio(window.devicePixelRatio)
    containerRef.current.appendChild(renderer.domElement)

    // Create a speaker placeholder (sphere with material)
    const geometry = new THREE.SphereGeometry(1, 64, 64)
    const material = new THREE.MeshStandardMaterial({
      color: 0x1a1a1a,
      metalness: 0.7,
      roughness: 0.3
    })
    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)

    // Lighting
    const light1 = new THREE.DirectionalLight(0xffffff, 1)
    light1.position.set(5, 5, 5)
    scene.add(light1)

    const light2 = new THREE.PointLight(0x3A86FF, 0.5)
    light2.position.set(-5, -5, 5)
    scene.add(light2)

    scene.add(new THREE.AmbientLight(0xffffff, 0.4))

    // Mouse controls
    let isDragging = false
    let previousMousePosition = { x: 0, y: 0 }

    containerRef.current.addEventListener('mousedown', (e) => {
      isDragging = true
      previousMousePosition = { x: e.clientX, y: e.clientY }
    })

    containerRef.current.addEventListener('mousemove', (e) => {
      if (isDragging) {
        const deltaX = e.clientX - previousMousePosition.x
        const deltaY = e.clientY - previousMousePosition.y

        mesh.rotation.y += deltaX * 0.005
        mesh.rotation.x += deltaY * 0.005

        previousMousePosition = { x: e.clientX, y: e.clientY }
      }
    })

    containerRef.current.addEventListener('mouseup', () => {
      isDragging = false
    })

    containerRef.current.addEventListener('wheel', (e) => {
      e.preventDefault()
      camera.position.z += e.deltaY * 0.001
      camera.position.z = Math.max(1, Math.min(5, camera.position.z))
    })

    sceneRef.current = { scene, mesh, camera, renderer }

    // Auto-rotate
    const animate = () => {
      requestAnimationFrame(animate)
      if (!isDragging) {
        mesh.rotation.y += 0.002
      }
      renderer.render(scene, camera)
    }
    animate()

    // Handle window resize
    const handleResize = () => {
      const width = containerRef.current.clientWidth
      const height = containerRef.current.clientHeight
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      renderer.dispose()
      if (containerRef.current && renderer.domElement.parentNode === containerRef.current) {
        containerRef.current.removeChild(renderer.domElement)
      }
    }
  }, [])

  const changeColor = (colorHex) => {
    if (sceneRef.current) {
      sceneRef.current.mesh.material.color.set(colorHex)
    }
  }

  return (
    <div className="product-viewer-container">
      <div ref={containerRef} className="product-viewer" />
    </div>
  )
}

export default ProductViewer