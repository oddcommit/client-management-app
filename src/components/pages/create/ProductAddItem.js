import React, { useState, memo } from "react";
//Vendor
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Grid from "@material-ui/core/Grid";
import { useForm } from "react-hook-form";
import nanoid from "nanoid";
// Custom
import { Button } from "../../styledComponents/shared/Button";

//Component
function ProductAddItem(props) {
  const { register, handleSubmit, errors } = useForm();
  const [form, setForm] = useState({ itemName: "", rate: "", disc: 0, qty: 1 });
  const updateFrom = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const currency = "$";

  const onSubmit = (data) => {
    data = { id: nanoid(4), ...data };
    props.handleAdd(data);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={4} lg={4}>
        <TextField
          size="small"
          fullWidth
          label="Item Name"
          name="itemName"
          variant="outlined"
          margin="dense"
          onChange={updateFrom}
          value={form.inputName}
          inputRef={register({ required: true, minLength: 2 })}
          error={errors.itemName && true}
          helperText={errors.itemName && "Invalid Input"}
        />
      </Grid>
      <Grid item xs={8} md={2} lg={2}>
        <TextField
          size="small"
          type="number"
          variant="outlined"
          margin="dense"
          label="Rate"
          name="rate"
          onChange={updateFrom}
          value={form.rate}
          inputRef={register({ required: true, min: 0 })}
          fullWidth
          error={errors.rate && true}
          helperText={errors.rate && "Invalid Input"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <b>{currency}</b>
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid item xs={4} md={1} lg={1}>
        <TextField
          size="small"
          type="number"
          variant="outlined"
          margin="dense"
          label="Disc"
          name="disc"
          value={form.disc}
          onChange={updateFrom}
          inputRef={register({ required: true, min: 0, max: 100 })}
          fullWidth
          error={errors.disc && true}
          helperText={errors.disc && "Invalid"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <b>%</b>
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid item xs={4} md={1} lg={1}>
        <TextField
          size="small"
          type="number"
          label="Qty"
          name="qty"
          value={form.qty}
          onChange={updateFrom}
          inputRef={register({ required: true, min: 0, max: 999 })}
          variant="outlined"
          margin="dense"
          fullWidth
          error={errors.qty && true}
          helperText={errors.qty && "Invalid"}
        />
      </Grid>
      <Grid item xs={8} md={2} lg={2}>
        <TextField
          size="small"
          type="number"
          variant="outlined"
          margin="dense"
          label="Amount"
          name="amount"
          value={(form.rate * form.qty * (1 - form.disc / 100)).toFixed(2)}
          inputRef={register({ required: true, min: 0 })}
          error={errors.amount && true}
          helperText={errors.amount && "Something Wrong"}
          fullWidth
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <b>{currency}</b>
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid item xs={12} md={2} lg={2}>
        <Grid
          container
          justify="space-between"
          alignItems="center"
          style={{ height: "100%" }}
        >
          <Button secondary onClick={handleSubmit(onSubmit)}>
            ADD
          </Button>
        </Grid>
      </Grid>
    </Grid>

    // <form>
    //   <div className="form-row">
    //     <div className="col-md-3 mb-3">
    //       <input
    //         type="text"
    //         id="validationServer01"
    //         className="form-control"
    //         name="itemName"
    //         onChange={updateFrom}
    //         value={form.inputName}
    //         placeholder="Item Name"
    //         inputRef={register({ required: true, minLength: 2 })}
    //         error={errors.itemName && true}
    //         helperText={errors.itemName && "Invalid Input"}
    //       />
    //     </div>

    //     <div className="input-group col-md-2 mb-3">
    //       <div className="prepend">
    //         <span className="input-group-text">$</span>
    //       </div>

    //       <input
    //         type="number"
    //         min="0"
    //         max="9"
    //         name="rate"
    //         className="form-control "
    //         onChange={updateFrom}
    //         placeholder="Amount"
    //         value={form.rate}
    //         inputRef={register({ required: true, min: 0 })}
    //         error={errors.rate && true}
    //       />
    //       <div className="append">
    //         <span className="input-group-text">.00</span>
    //       </div>
    //     </div>

    //     <div className="input-group col-md-2 mb-3">
    //       <div class="prepend">
    //         <span class="input-group-text">Disc</span>
    //       </div>
    //       <input
    //         type="number"
    //         min="0"
    //         max="2"
    //         className="form-control"
    //         name="disc"
    //         value={form.disc}
    //         onChange={updateFrom}
    //         inputRef={register({ required: true, min: 0, max: 100 })}
    //         error={errors.disc && true}
    //       />
    //       <div className="append">
    //         <span className="input-group-text">%</span>
    //       </div>
    //     </div>

    //     <div className=" input-group col-md-2 mb-3">
    //       <div class="prepend">
    //         <span class="input-group-text">Qty</span>
    //       </div>
    //       <input
    //         type="number"
    //         name="qty"
    //         min="0"
    //         max="2"
    //         value={form.qty}
    //         onChange={updateFrom}
    //         className="form-control "
    //         inputRef={register({ required: true, min: 0, max: 999 })}
    //         error={errors.qty && true}
    //       />
    //     </div>

    //     <div className="input-group col-md-2 mb-3">
    //       <div className="prepend">
    //         <span className="input-group-text">$</span>
    //       </div>
    //       <input
    //         type="number"
    //         name="amount"
    //         className="form-control "
    //         value={(form.rate * form.qty * (1 - form.disc / 100)).toFixed(2)}
    //         inputRef={register({ required: true, min: 0 })}
    //         error={errors.amount && true}
    //       />
    //       <div className="append">
    //         <span className="input-group-text">Total</span>
    //       </div>
    //     </div>
    //     <div className="input-group col-md-1 mb-3">
    //       <Button secondary onClick={handleSubmit(onSubmit)}>
    //         ADD
    //       </Button>
    //     </div>
    //   </div>
    // </form>
  );
}

export default memo(ProductAddItem);
