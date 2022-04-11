import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import ContainerBox from '../components/ContainerBox';
import Header from '../components/Header';
import InfoCapsule from '../components/InfoCapsule';
import Api from "../services/api";

type responseProps = {
  active: number
  cases: number
  casesPerOneMillion: number
  country: string
  critical: number
  deaths: number
  deathsPerOneMillion: number
  recovered: number
  testsPerOneMillion: number
  todayCases: number
  todayDeaths: number
  totalTests: number
}

function App() {

  const [data, setData] = useState(null as responseProps | null);
  const [country, setCountry] = useState("brazil")


  useEffect(() => {
    Api.getCountry(country).then(res => {
      setData(res as responseProps);
    })
  }, [country])


  return (
    <ContainerBox>

      {data != null && (
        <>
          <Header setCountry={setCountry}/>
          <section>
            <InfoCapsule name="Com Covid" data={data.active} color="#cc9814"/>
            <InfoCapsule name="Total De Casos" data={data.cases} color="#ff00f2"/>
            <InfoCapsule name="Total De mortos" data={data.deaths} color="#3c3c3c"/>
            <InfoCapsule name="Casos Hoje" data={data.todayCases} color="#be2323"/>
            <InfoCapsule name="Óbitos Hoje" data={data.todayDeaths} color="#744a72"/>
            <InfoCapsule name="Testados Hoje" data={data.totalTests} color="#00ff95"/>
            <InfoCapsule name="Recuperados" data={data.recovered} color="#09ff00"/>
            <InfoCapsule name="Casos por milhao" data={data.casesPerOneMillion} color="#00aaff"/>
            <InfoCapsule name="Mortes por milhao" data={data.deathsPerOneMillion} color="#e1ff00"/>
            <InfoCapsule name="Testes por milhao" data={data.testsPerOneMillion} color="#55a76b"/>
          </section>
          
        </>
      )}
    </ContainerBox>
  );
}

export default App;
