import dynamic from 'next/dynamic'
import Head from 'next/head'

// load your inspection tool (no SSR)
const InspectionTool = dynamic(() => import('../components/InspectionTool'), {
  ssr: false
})

export default function Home() {
  return (
    <>
      <Head>
        <title>ReclaimTool</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>
        <InspectionTool />
      </div>
    </>
  )
}
