import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { fetchSmurfData } from '../store/actions'
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
     fetchSmurfData
}) => {

     const classes = useStyles();

     useEffect(() => {
          fetchSmurfData()
     }, [fetchSmurfData])

     return (
          <div>
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
     { fetchSmurfData }
)(SmurfList)
