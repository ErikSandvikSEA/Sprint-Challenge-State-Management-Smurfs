import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import { fetchSmurfData, postSmurf, deleteSmurf } from '../store/actions'
import Smurf from './Smurf'

import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
     root: {
          display: 'flex',
          justifyContent: 'center',
     },
}));

const SmurfList = ({
     isFetching,
     smurfs,
     error,
     fetchSmurfData,
     postSmurf
}) => {

     const classes = useStyles();
     const [formValues, setFormValues ] = useState({
          name: '',
          age: '',
          height: '',
     })

     useEffect(() => {
          fetchSmurfData()
     }, [ fetchSmurfData, deleteSmurf])


     useEffect(() => {
          setFormValues(formValues)
          console.log(formValues)
     }, [formValues])

     const onChangeHandler = (e) => {
          setFormValues({ ...formValues, [e.target.name]: e.target.value })
        }

     const submitSmurf = e => {
          e.preventDefault()
          postSmurf(formValues)
     }

     return (
          <div>
               <h2>Welcome to Smurf Village</h2>

               <form>
                    <label>
                    Name:
            <input type="text" name="name" value={formValues.name} onChange={onChangeHandler} />
                    </label>

                    <label>
                    Age:
            <input type="text" name="age" value={formValues.age} onChange={onChangeHandler} />
                    </label>

                    <label>
                    Height:
            <input type="text" name="height" value={formValues.height} onChange={onChangeHandler} />
                    </label>

               </form>
               <button 
                    onClick={submitSmurf}
               className="btn btn-default">Submit</button>


               {
                    isFetching &&
                    <div className={classes.root}>
                         <CircularProgress color="secondary" />
                    </div>
               }
               <div>
                    {
                         smurfs.map((smurf) => (
                              <Smurf smurf={smurf} key={smurf.id} />
                         ))
                    }
               </div>
          </div>
     )
}

const mapStateToProps = state => {
     console.log(state)
     return {
          isFetching: state.isFetching,
          smurfs: state.smurfs,
          error: state.error,
     }
}

export default connect(
     mapStateToProps,
     { fetchSmurfData, postSmurf, deleteSmurf }
)(SmurfList)
