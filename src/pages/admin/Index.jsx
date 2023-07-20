import React,{useEffect, useState} from 'react'
import SideMenu from '../../components/SideMenu'
import {Card, Text, Metric} from '@tremor/react'

export default function Index() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch('https://harjos.draf.app/api/menu').then((res) => res.json()).then((data) => setData(data))
  }, [])
  console.log(data);

  function Part({className, title, metric}) {
    return (
      <Card decoration="top" decorationColor="indigo" className={`${className}`}>
        <Text>{title}</Text>
        <Metric>{metric}</Metric>
      </Card>
    );
  }
  return (
    <div className='flex flex-row h-screen'>
        <SideMenu />
        <div className='grid grid-cols-4 grid-rows-3 gap-4 p-12 w-full'>
          <Part title="sync" metric="selamat datang" className={`col-span-3`} />
          <Part title="pelanggan" metric="44 orang" />
          <Part className={`col-span-2`} />
          <Part title="Profit" metric="Rp.270.000,00" />
          <Part />
        </div>
    </div>
  )
}
