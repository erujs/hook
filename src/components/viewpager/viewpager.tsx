import { useEffect, useRef } from 'react'
import { useSprings, animated } from '@react-spring/web'
import useMeasure from 'react-use-measure'
import { useDrag } from 'react-use-gesture'
import clamp from 'lodash.clamp'

const ViewPager = ({ personas }) => {
  const pages = personas;

  const index = useRef(0)
  const [ref, { width }] = useMeasure()
  const [props, api] = useSprings(
    pages.length,
    i => ({
      // x: i * width,
      x: 0,
      scale: width === 0 ? 0 : 1,
      display: 'block',
    }),
    [width]
  )
  const bind = useDrag(({ active, movement: [mx], direction: [xDir], distance, cancel }) => {
    if (active && distance > width / 2) {
      index.current = clamp(index.current + (xDir > 0 ? -1 : 1), 0, pages.length - 1)
      cancel()
      // console.log(index.current)
    }
    api.start(i => {
      // if (i < index.current - 1 || i > index.current + 1) return { display: 'none' }
      if (i != index.current) return { display: 'none' }
      // const x = (i - index.current) * width + (active ? mx : 0)
      const x = (index.current - i)
      console.log(1 - distance / width / 2)
      const scale = active ? 1 - distance / width / 2 : 1
      return { x, scale, display: 'block' }
    })
  })

  useEffect(() => {
    bind()
  }, [])

  return (
    <div ref={ref} className="h-full w-full">
      {props.map(({ x, display, scale }, i) => (
        <animated.div className="absolute w-full h-full will-change-transform" {...bind()} key={i} style={{ display, x }}>
          <animated.div className="touch-none bg-cover bg-no-repeat bg-center w-full h-full will-change-transform shadow" style={{ scale, backgroundImage: `url(${pages[i]})` }} />
        </animated.div>
      ))}
    </div>
  )
}

export default ViewPager;
