import React, { useEffect, useState } from 'react';
import { useAxios } from 'use-axios-client';
import axios from 'axios';

function UseAxiosCl() {

    const [variable,setVariable] = useState({page:1,pageSize:10})
    const [fetchedData,setFetchedData] = useState()

    let user ={
        email:'User1@gmail.com',
        password:'123456'
    }

    const { data, error, loading,refetch } = useAxios({
        url: `http://192.168.2.183:4001/api/cms/users/getUser?page=1&limit=3`,
    });

    console.log(data)

    // const getData = async () => {
    //     await axios.get(`http://survivalswimclub.com/mysystem/get/getAxios.php?data=${JSON.stringify(variable)}`,{
    //         headers:{
    //             "authorization":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NDYyMDc1MDYsImlzcyI6InlvdXIuZG9tYWluLm5hbWUiLCJuYmYiOjE2NDYyMDc1MDYsImV4cCI6MTY0NjIwNzg2NiwiZGF0YV9faWQiOiJ0ZXN0In0.pNmPO3jmDZd-mR8PDbQ7zSe_qP7csEOdFWfGVG5vj48"
    //         }
    //     }).then(response =>{
    //         console.log(response,'test')
    //         setFetchedData(response)
    //     }).catch(error =>{
    //         console.log(error,'test')
    //     })
    // }

    // useEffect(async()=>{
    //     await getData()
    // },[])

    return (
        <>
            {/* {loading && <div>Loading...</div>}
            {error && <div>{error.message}</div>}
            {data && <div>{JSON.stringify(data)}</div>}

            <button onClick={()=> refetch()}>Refetch</button> */}
        </>
    )
}

export default UseAxiosCl;
