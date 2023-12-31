import React, {useState, useEffect} from 'react'
import { Paper, Step, Stepper, StepLabel, Typography, CircularProgress, Divider, Button } from '@mui/material'
import AddressForm from '../AddressForm';
import PaymentForm from '../PaymentForm';
import "./checkout.css"
import { commerce } from "../../../lib/commerce";
import {useNavigate} from "react-router-dom"

const steps = ["Shipping address", "Payment details"];
const Checkout = ({ cart }) => {
    const [checkoutToken, setCheckoutToken] = useState(null);
    const [activeStep, setActiveStep] = useState(0);
    const [shippingData, setShippingData] = useState({});
    const navigate = useNavigate();

    const nextStep = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1)
    }
    const backStep = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1)
    }

    const next = (data) => {
        setShippingData(data);
        nextStep()
    }
    useEffect(() => {
        const generateToken = async () => {
            try {
                const token = await commerce.checkout.generateToken(cart.id, { type : "cart"});
                setCheckoutToken(token)
            } catch (error) {
                navigate.pushState("/")
            }
        }
        generateToken();
    }, [cart])

    const Form = () => activeStep  === 0 ? <AddressForm checkoutToken={checkoutToken} next={next}/> : 
    <PaymentForm checkoutToken ={checkoutToken} backStep = {backStep}/>
    
  return (
    <>
        <main className='checkout'>
            <Paper sx={{p : 2, width : "70%"}}>
                <Typography variant='h4' align='center'>Checkout</Typography>
                <Stepper activeStep={activeStep}>
                    {steps.map((step) => (
                        <Step key={step}>
                            <StepLabel>{step}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                    {activeStep !== steps.length ? checkoutToken && <Form /> : "" }
            </Paper>
        </main>
    </>
  )
}

export default Checkout
