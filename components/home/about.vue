<script setup lang="ts" name="AboutSection">
import { Linear, gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

const quoteRef: Ref<HTMLElement | undefined> = ref(undefined)
const targetSection: Ref<HTMLElement | undefined> = ref(undefined)

const willChange = ref(false)

function initAboutAnimation(quoteRef: Ref<HTMLElement | undefined>, targetSection: Ref<HTMLElement | undefined>): ScrollTrigger {
  const timeline = gsap.timeline({
    defaults: { ease: Linear.easeNone, duration: 0.1 },
  })
  timeline
    .fromTo(quoteRef.value!.querySelector('.about-1'), { opacity: 0.2 }, { opacity: 1 })
    .to(quoteRef.value!.querySelector('.about-1'), {
      opacity: 0.2,
      delay: 0.5,
    })
    .fromTo(quoteRef.value!.querySelector('.about-2'), { opacity: 0.2 }, { opacity: 1 }, '<')
    .to(quoteRef.value!.querySelector('.about-2'), {
      opacity: 0.2,
      delay: 1,
    })

  const scrollTriggerInstance = ScrollTrigger.create({
    trigger: targetSection.value,
    start: 'center 80%',
    end: 'center top',
    scrub: 0,
    animation: timeline,
    onToggle: self => willChange.value = self.isActive,
  })
  return scrollTriggerInstance
}

onMounted(() => {
  const aboutScrollTriggerInstance = initAboutAnimation(quoteRef, targetSection)
  return aboutScrollTriggerInstance.kill
})
</script>

<template>
  <section ref="targetSection" class="section-container relative w-full select-none pb-16 pb-24 pt-20 pt-40">
    <h1 ref="quoteRef" class="text-3xl font-medium md:text-6xl sm:text-4xl">
      <span :class="`about-1 leading-tight ${willChange ? 'will-change-opacity' : ''}`">
        I am a dedicated microelectronics engineering student who bridges the gap between semiconductor theory and practical chip design, striving to innovate in the realm of integrated circuits and nanoscale technologies.
      </span>
      <span :class="`about-2 leading-tight ${willChange ? 'will-change-opacity' : ''}`">
        I take responsibility to design efficient and reliable microelectronic systems using cutting-edge semiconductor technologies and advanced fabrication methodologies.
      </span>
    </h1>
  </section>
</template>
