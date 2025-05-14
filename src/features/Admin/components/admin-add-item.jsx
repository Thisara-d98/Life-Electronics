import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
import Select from "react-select";
import { 
  Input, 
  Typography, 
  Button, 
  Grid, 
  Card, 
  CardHeader,
  CardContent,
  TextField,
  FormHelperText,
  InputAdornment,
  Snackbar,
  Alert,
  Box
} from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Types from "../../../enums/item-types-enum";
import generateSelectOptions from "../../../utils/generate-select-options.js";
import useAdminAddItemLogic from "../hooks/use-admin-add-item-logic.jsx";

// Define validation schema
const schema = yup.object().shape({
  type: yup.object().required("Type is required"),
  brand: yup.string().required("Brand is required"),
  description: yup.string().required("Description is required"),
  price: yup
    .number()
    .typeError("Price must be a number")
    .positive("Price must be positive")
    .required("Price is required"),
  noofItems : yup.number()
    .typeError("Quantity must be a number")
    .positive("Quantity must be positive")
    .required("Quantity is required")
});



const options = Object.entries(Types).map(([id,label])=>({
  value:id,
  label:label
}));

const AdminAddItem = () => {
  const [successMessage, setSuccessMessage] = useState(false);
  const  {onSubmit} = useAdminAddItemLogic();
  
  const { 
    handleSubmit, 
    control, 
    reset, 
    formState: { errors } 
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      type: null,
      brand: "",
      description: "",
      price: "",
      noofItems:null
    }
  });

  const customStyles = {
    control: (provided) => ({
      ...provided,
      borderColor: errors.type ? '#d32f2f' : provided.borderColor,
      boxShadow: errors.type ? '0 0 0 1px #d32f2f' : provided.boxShadow,
      '&:hover': {
        borderColor: errors.type ? '#d32f2f' : provided.borderColor
      }
    })
  };

  return (
    <Card 
      elevation={3} 
      sx={{ 
        padding: 0, 
        maxWidth: 600, 
        mx: 4, 
      
        borderRadius: 2,
        overflow: "visible"
      }}
    >
      <CardHeader 
        title="Add New Product" 
        sx={{
          backgroundColor: "#fef3eb", 
          color: "#E11E73",
          padding: 3,
          borderBottom: "1px solid #f0f0f0"
        }}
      />
      
      <CardContent sx={{ padding: 3 }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography 
                variant="subtitle2" 
                sx={{ mb: 1, fontWeight: 600 }}
              >
                Product Type
              </Typography>
              <Controller
                name="type"
                control={control}
                render={({ field }) => (
                  <>
                    <Select
                      {...field}
                      options={options}
                      placeholder="Select product type..."
                      styles={customStyles}
                      isSearchable
                    />
                    {errors.type && (
                      <FormHelperText error>
                        {errors.type.message}
                      </FormHelperText>
                    )}
                  </>
                )}
              />
            </Grid>
            
            <Grid item xs={12}>
              <Typography 
                variant="subtitle2" 
                sx={{ mb: 1, fontWeight: 600 }}
              >
                Brand
              </Typography>
              <Controller
                name="brand"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    placeholder="Enter brand name"
                    variant="outlined"
                    error={!!errors.brand}
                    helperText={errors.brand?.message}
                    size="small"
                  />
                )}
              />
            </Grid>

            <Grid item xs={12}>
              <Typography 
                variant="subtitle2" 
                sx={{ mb: 1, fontWeight: 600 }}
              >
                Price
              </Typography>
              <Controller
                name="price"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    placeholder="0.00"
                    variant="outlined"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">$</InputAdornment>
                      ),
                    }}
                    error={!!errors.price}
                    helperText={errors.price?.message}
                    size="small"
                  />
                )}
              />
            </Grid>

            <Grid item xs={12}>
              <Typography 
                variant="subtitle2" 
                sx={{ mb: 1, fontWeight: 600 }}
              >
                Description
              </Typography>
              <Controller
                name="description"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    placeholder="Enter product description"
                    variant="outlined"
                    multiline
                    rows={3}
                    error={!!errors.description}
                    helperText={errors.description?.message}
                  />
                )}
              />
            </Grid>

            <Grid item xs={12}>
              <Typography 
                variant="subtitle2" 
                sx={{ mb: 1, fontWeight: 600 }}
              >
              Quantity
              </Typography>
              <Controller
                name="noofItems"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    placeholder="Quantity"
                    variant="outlined"
                    
                    error={!!errors.noofItems}
                    helperText={errors.noofItems?.message}
                    size="small"
                  />
                )}
              />
            </Grid>

            <Grid item xs={12} sx={{ mt: 2 }}>
              <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end' }}>
                <Button 
                  type="button" 
                  variant="outlined" 
                  sx={{ 
                    color: '#E11E73', 
                    borderColor: '#E11E73',
                    '&:hover': {
                      borderColor: '#c01a68',
                      backgroundColor: 'rgba(225, 30, 115, 0.04)'
                    }
                  }} 
                  onClick={() => reset()}
                >
                  Reset
                </Button>
                <Button 
                  type="submit" 
                  variant="contained" 
                  sx={{ 
                    backgroundColor: '#E11E73', 
                    color: '#fff',
                    '&:hover': {
                      backgroundColor: '#c01a68',
                    }
                  }}
                >
                  Add Product
                </Button>
              </Box>
            </Grid>
          </Grid>
        </form>
      </CardContent>
      
      <Snackbar
        open={successMessage}
        autoHideDuration={6000}
        onClose={() => setSuccessMessage(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={() => setSuccessMessage(false)} 
          severity="success" 
          variant="filled"
          sx={{ width: '100%' }}
        >
          Product successfully added!
        </Alert>
      </Snackbar>
    </Card>
  );
}

export default AdminAddItem;