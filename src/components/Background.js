import { Button, TextField } from '@mui/material'
import React from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useState } from 'react';

const schema = yup.object({
    firstName: yup.string().required("dfssdffdfsf"),
    // age: yup.number().positive().integer().required(),
}).required();

const initialState = {
    firstName: ''
}

export default function Background() {

    const [formData, setFormData] = useState({ ...initialState })
    const { register, reset, handleSubmit, setValue, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        defaultValues: { ...initialState },
    });

    const onSubmit = data => {
        console.log(data)

        setFormData({ ...initialState })
        reset({ ...initialState })
    };

    return (
        <div style={{ padding: 20 }}>

            <TextField
                error={!!errors.firstName}
                helperText={errors.firstName?.message}
                // required
                value={formData?.firstName}
                label="Outlined"
                variant="outlined"
                {...register("firstName",
                    {
                        onChange: (e) => setFormData({ ...formData, firstName: e.target.value })
                    })
                }

            />
            <br />



            <Button onClick={handleSubmit(onSubmit)}>Submit</Button>
        </div>
    )
}
