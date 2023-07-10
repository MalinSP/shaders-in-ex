import { gsap } from 'gsap'

export default function contentSectionAnimation() {
  gsap.fromTo(
    '.exhale',
    {
      autoAlpha: 1,
      scale: 1,
    },
    {
      autoAlpha: 0.5,
      scale: 0.95,
      yoyo: true,
      duration: 5,
      overwrite: 'auto',
      repeat: -1,
      fontVariationSettings: 'wght ' + 200,
    }
  )
  gsap.fromTo(
    '.inhale',
    {
      autoAlpha: 0.5,
      scale: 0.95,
    },
    {
      autoAlpha: 1,
      scale: 1,
      yoyo: true,
      duration: 5,
      overwrite: 'auto',
      repeat: -1,
      fontVariationSettings: 'wght ' - 200,
    }
  )
}
