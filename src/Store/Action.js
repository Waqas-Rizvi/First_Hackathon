import firebase from "../Config/Firebase";

const signup = (user) => {
    return (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then((res) => {
            firebase.database().ref("/").child(`users/${res.user.uid}`).set(user)
            alert("signup")
        })
        .catch((err) => {
            console.log(err.message)
        })
    }
}

const login = (user) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then((res) => {
                firebase.database().ref("/").child(`users/${res.user.uid}`).once('value', (data) => {
                    dispatch({
                        type: "LOGIN",
                        user: user.uid
                    })
                    resolve(res.user.uid)
                })
            })
            .catch((err) => {
                reject(err.message)
            })
        })
    }
}

const data = () => {
    return(dispatch) =>{
        firebase.database().ref("/").child("Hotels").on('value', (data) => {
            var arr = []
                for (var key in data.val()) {
                    arr.push(data.val()[key])
                }
            dispatch({ type: "CARDS", Cards: arr})
        })
    }
}

export {
    signup,
    login,
    data
}