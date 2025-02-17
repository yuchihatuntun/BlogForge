// Copyright Ayush Singh 2021,2022. All Rights Reserved.
// Project: folio
// Author contact: https://www.linkedin.com/in/alphaayush/
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

export interface IDesktop {
  isDesktop: boolean
}

export const isSmallScreen = (): boolean => document.body.clientWidth < 767

export const NO_MOTION_PREFERENCE_QUERY = '(prefers-reduced-motion: no-preference)'

export const METADATA = {
  title: 'Portfolio | Tuntun Yuchiha',
  description:
    'I am committed to optimizing hardware architecture and conducting deep data mining.',
  siteUrl: 'https://filio-topaz.vercel.app/',
}

export const MENULINKS = [
  {
    name: 'Home',
    ref: 'home',
  },
  {
    name: 'Works',
    ref: 'works',
  },
  {
    name: 'Skills',
    ref: 'skills',
  },
  {
    name: 'Timeline',
    ref: 'timeline',
  },
  {
    name: 'Contact',
    ref: 'contact',
  },
]

export const TYPED_STRINGS = [
  'I design semiconductor circuits',
  'I optimize chip architectures',
  'I develop microelectronic systems',
  'I innovate in fabrication techniques',
]

export const EMAIL = 'xurlin7@mail2.sysu.edu.cn'

export const SOCIAL_LINKS = {
  bilibili: 'https://space.bilibili.com/695455436?spm_id_from=333.1007.0.0',
  github: 'https://github.com/yuchihatuntun',
} as Record<string, string>

export interface IProject {
  name: string
  image: string
  blurImage: string
  description: string
  gradient: [string, string]
  url: string
  tech: string[]
}

export const PROJECTS: IProject[] = [
  {
    name: 'RISCV - Five-stage pipeline CPU design',
    image: '/projects/riscv.jpg',
    blurImage: '/projects/blur/riscv-blur.png',
    description: 'A RISCV architecture CPU that can perform fast power algorithms.',
    gradient: ['#1F6582', '#1ABCFE'],
    url: '/projects/Paper/riscv-doc.pdf',
    tech: ['RISCV', 'Vhdl', 'MATLAB'],
  },
  {
    name: '2024-APMCM',
    image: '/projects/APMCM.png',
    blurImage: '/projects/blur/ACMPM-blur.jpg',
    description: 'National First Prize in the 2024 APMCM',
    gradient: ['#153BB9', '#0E2C8B'],
    url: '/projects/Paper/2024APMCM.pdf',
    tech: ['python', 'R', 'MATLAB'],
  },
  {
    name: '2024-MathorCup',
    image: '/projects/MathorCup.png',
    blurImage: '/projects/blur/MathorCup-blur.png',
    description: 'National First Prize in the 2024 MathorCup (Big Data Competition)',
    gradient: ['#245B57', '#004741'],
    url: '/projects/Paper/2024MathorCup.pdf',
    tech: ['python', 'MATLAB'],
  },
  {
    name: '2024-ChinaMCM',
    image: '/projects/ChinaMCM.png',
    blurImage: '/projects/blur/ChinaMCM-blur.png',
    description: 'Provincial Third Prize in the 2024 China MCM',
    gradient: ['#D7A1A1', '#C9A1A1'],
    url: '/projects/Paper/2024ChinaMCM.pdf',
    tech: ['python', 'mathematica', 'MATLAB'],
  },
  {
    name: '2024-NCSSM',
    image: '/projects/NCSSM.png',
    blurImage: '/projects/blur/NCSSM-blur.png',
    description: 'Provincial Third Prize in the 2024 NCSSM',
    gradient: ['#2E59A7', '#F5F2E9'],
    url: '/B2400772.pdf',
    tech: ['python', 'mathematica', 'MATLAB'],
  },
]

export const SKILLS = {
  frontend: ['RISCV', 'Vhdl', 'python', 'MATLAB', 'c language', 'html', 'css', 'mathematica', 'R'],
  userInterface: ['illustrator', 'photoshop', 'lightroom'],
  other: ['git'],
}

export enum Branch {
  LEFT = 'leftSide',
  RIGHT = 'rightSide',
}

export enum NodeTypes {
  CONVERGE = 'converge',
  DIVERGE = 'diverge',
  CHECKPOINT = 'checkpoint',
}

export enum ItemSize {
  SMALL = 'small',
  LARGE = 'large',
}

export const TIMELINE: Array<TimelineNodeV2> = [
  {
    type: NodeTypes.CHECKPOINT,
    title: '2025',
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: '2025-02: Blog officially launched',
    size: ItemSize.SMALL,
    subtitle: 'Project replicated in Ayush',
    image: '/timeline/blog.svg',
    slideImage: '/timeline/blog.png',
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: '2025-01: MCM&ICM',
    size: ItemSize.SMALL,
    subtitle: 'Expected results by April 30, 2025',
    image: '/timeline/R.svg',
    slideImage: '/timeline/MCMICM.png',
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: '2025-01: Final Exam for Fall Semester 2024',
    size: ItemSize.SMALL,
    subtitle: 'Toughest time ever, 9 exams in 7 days😅',
    image: '/timeline/芯片.svg',
    slideImage: '/timeline/期末.jpg',
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: '2024',
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: '2024-12: Research Project Approval',
    size: ItemSize.SMALL,
    subtitle: 'Simulation and design study of COMSOL-based MEMS thermal convection inclination sensor, Ninth place in intramural program🥰',
    image: '/timeline/大创.svg',
    slideImage: '/timeline/大创.jpg',
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: '2024-11: APMCM',
    size: ItemSize.SMALL,
    subtitle: 'National First Prise🤩',
    image: '/timeline/python.svg',
    slideImage: '/timeline/APMCM.png',
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: '2024-10: MathorCup',
    size: ItemSize.SMALL,
    subtitle: 'My First National First Prise🤗',
    image: '/timeline/MATLAB.svg',
    slideImage: '/timeline/MathorCup.png',
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: '2024-09: CUMCM (China Undergraduate Mathematical Contest in Modeling)',
    size: ItemSize.SMALL,
    subtitle: 'Provincial Third Prize😑',
    image: '/timeline/MATLAB.svg',
    slideImage: '/timeline/CUMCM.png',
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: '2024-08: ChinaMCM',
    size: ItemSize.SMALL,
    subtitle: 'Provincial Third Prize😐',
    image: '/timeline/mathematica.svg',
    slideImage: '/timeline/ChinaMCM.png',
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: '2024-05: NCSSM',
    size: ItemSize.SMALL,
    subtitle: 'Provincial Third Prize🤨',
    image: '/timeline/MATLAB.svg',
    slideImage: '/timeline/NCSSM.png',
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: '2023',
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: '2023-07: Summer Promise: Dream Sets Sail at SYSU',
    size: ItemSize.SMALL,
    subtitle: 'Under the Banyan Trees: Beginning a Story of Growth and Discovery',
    image: '/timeline/中山大学.svg',
    slideImage: '/timeline/SYSU-99.gif',
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
]

export type TimelineNodeV2 = CheckpointNode | BranchNode

export interface CheckpointNode {
  type: NodeTypes.CHECKPOINT
  title: string
  subtitle?: string
  size: ItemSize
  image?: string
  slideImage?: string
  shouldDrawLine: boolean
  alignment: Branch
}

export interface BranchNode {
  type: NodeTypes.CONVERGE | NodeTypes.DIVERGE
}

export const GTAG = 'UA-163844688-1'
