import dynamic from 'next/dynamic'

// no SSR so we can access window/camera
const InspectionTool = dynamic(
  () => import('../components/InspectionTool'),
  { ssr: false }
)

export default function Home() {
  return <InspectionTool />
}
