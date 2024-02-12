import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { Button, Grid, Typography } from "@mui/material";
import './Contactus.css'
import { banner, venkat } from "../../Assests/ImageExport/ImageExport";

const MyForm = (props) => {
  const { control, handleSubmit, formState} = useForm();

  return (
    <div>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={1} // Adjust the spacing between grid items
      >
        <Grid item xs={12} md={6} sx={{textAlign:"center",marginTop:"30px"}} data-aos="fade-right"  data-aos-duration="2000">
          <img src={venkat} alt="img"  className="venkatimg"/>
        </Grid>
        <Grid item xs={12} md={6}>
          <form onSubmit={handleSubmit()} className="forms" >
            <Typography variant="h2" gutterBottom>
              Contact Me
            </Typography>
            <div>
              <Controller
                name="name"
                control={control}
                defaultValue=""
                rules={{
                  required: "Name is required",
                  minLength: {
                    value: 2,
                    message: "Minimum length is 2 characters",
                  },
                  maxLength: {
                    value: 20,
                    message: "Maximum length is 20 characters",
                  },
                }}
                render={({ field }) => (
                  <>
                    <TextField
                      {...field}
                      fullWidth
                      label="Name"
                      margin="normal"
                      error={!!formState.errors.name}
                    />
                    {formState.errors.name && (
                      <p style={{ color: "red" }}>{formState.errors.name.message}</p>
                    )}
                  </>
                )}
              />
              <br />
              <br />
              <Controller
                name="email"
                control={control}
                defaultValue=""
                rules={{
                  required: "email is mandatory",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "enter the valid email id",
                  },
                }}
                render={({ field }) => (
                  <>
                    <TextField
                      {...field}
                      label="Email"
                      fullWidth
                      error={!!formState.errors.email}
                    />
                    {formState?.errors.email && (
                      <p style={{ color: "red" }}>
                        {formState?.errors.email.message}
                      </p>
                    )}
                  </>
                )}
              />
              <br />
              <br />
              <Controller
                name="message"
                control={control}
                defaultValue=""
                rules={{
                  required: " Message is required",
                  minLength: {
                    value: 5,
                    message: "min 5 letters",
                  },
                  maxLength: {
                    value: 25,
                    message: "max 30 letters",
                  },
                }}
                render={({ field }) => (
                  <>
                    <TextField
                      {...field}
                      label="Message Me"
                      type="text"
                      multiline
                      rows={4}
                      fullWidth
                      error={!!formState.errors.message}
                    />
                    {formState.errors.message && (
                      <p style={{ color: "red" }}>
                        {formState.errors.message.message}
                      </p>
                    )}
                  </>
                )}
              />
              <Button type="submit"> Submit</Button>
            </div>
          </form>
        </Grid>
      </Grid>
    </div>
  );
};

export default MyForm;
