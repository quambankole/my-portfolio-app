'use client'

import React, { useEffect, useRef } from 'react'

export function Particles({ quantity = 100, ease = 80, color = "#ffffff", refresh = false, className = "" }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let particles = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const random = (min, max) => Math.random() * (max - min) + min

    const createParticles = () => {
      particles = []
      for (let i = 0; i < quantity; i++) {
        particles.push({
          x: random(0, canvas.width),
          y: random(0, canvas.height),
          radius: random(1, 3),
          speedX: random(-0.5, 0.5),
          speedY: random(-0.5, 0.5)
        })
      }
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = color
      particles.forEach(p => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fill()
      })
    }

    const update = () => {
      particles.forEach(p => {
        p.x += p.speedX
        p.y += p.speedY

        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1
      })
    }

    const animate = () => {
      draw()
      update()
      requestAnimationFrame(animate)
    }

    window.addEventListener('resize', resize)
    resize()
    createParticles()
    animate()

    return () => window.removeEventListener('resize', resize)
  }, [quantity, color, refresh])

  return <canvas ref={canvasRef} className={className} />
}