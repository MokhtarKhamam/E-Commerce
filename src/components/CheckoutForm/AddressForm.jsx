import React, { useState, useEffect } from 'react'
import { Typography, Button, Select, InputLabel, Grid, MenuItem } from '@mui/material'
import {useForm, FormProvider} from "react-hook-form";
import FormInput from './CustomTextField';
import { commerce } from "../../lib/commerce"
import { Link } from "react-router-dom"


const AddressForm = ({ checkoutToken, next }) => {
  const methods = useForm();
  const [shippingCountries, setShippingCountries] = useState([]);
  const [shippingCountry, setShippingCountry] = useState("");

  const countries = Object.entries(shippingCountries).map(([code, name]) => ({id : code, label : name}))


  const fetchShippingCountries = async (checkoutTokenId) => {
    const { countries } = await commerce.services.localeListShippingCountries(checkoutTokenId);
    setShippingCountries(countries);
    setShippingCountry(Object.keys(countries)[0])
  }

  useEffect(() => {
    fetchShippingCountries(checkoutToken.id);
  }, [])


  return (
    <>
      <Typography variant='h6' gutterBottom >Shipping Address</Typography>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit((data) => next({ ...data, shippingCountry }) )}>
          <Grid container spacing={3}>
            <FormInput required name="firstName" label="First Name" />
            <FormInput required name="lastName" label="Last Name" />
            <FormInput required name="address" label="Address" />
            <FormInput required name="email" label="Email" />
            <FormInput required name="city" label="City" />
            <FormInput required name="zip" label="ZIP / Postal code" />
            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Country</InputLabel>
              <Select value={shippingCountry} fullWidth onChange={(e) => setShippingCountry(e.target.value)}>
                {countries.map((country) => (
                  <MenuItem key={country.id} value={country.id}>
                    {country.label}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
          </Grid>
          <br />
          <div style={{display : "flex", justifyContent : "space-evenly"}}>
            <Button variant='outlined' to="/cart" component={Link} >Back to Cart</Button>
            <Button variant='contained' type='submit' color='primary'>Next</Button>
          </div>
        </form>
      </FormProvider>
    </>
  )
}
export default AddressForm;
