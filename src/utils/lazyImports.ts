import { lazy } from 'react'

// Lazy load pages for better performance
export const Home = lazy(() => import('../pages/Home'))
export const About = lazy(() => import('../pages/About'))
export const Projects = lazy(() => import('../pages/Projects'))
export const Services = lazy(() => import('../pages/Services'))
export const Team = lazy(() => import('../pages/Team'))
export const Careers = lazy(() => import('../pages/Careers'))
export const Contact = lazy(() => import('../pages/Contact'))
export const NotFound = lazy(() => import('../pages/NotFound'))

// Lazy load heavy components
export const WebAnimation = lazy(() => import('../components/WebAnimation'))
export const CodingWindow = lazy(() => import('../components/CodingWindow'))
