import React, { Component } from 'react'
import getUser from '../../Database/getUer'
import firebase, { rdb } from '../../firebase'
import '../../CSS/Pages/Cart.css'

export class Cart extends Component {

    state = {
        cart: null
    }

    componentDidMount() {
        getUser().then(user => {
            if (user) {
                rdb.ref().child("carts").child(user[3]).on('value', snap => {
                    var item = []
                    snap.forEach(doc => {
                        item.push(doc.val())
                    })
                    this.setState({ cart: item })
                })
            }
        })
    }

    deleteItem = (title) => {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                rdb.ref().child("carts").child(user.uid).child(title).remove();
            }
        })
    }

    render() {

        if (this.state.cart) {
            return (
                <div className="cart-page" >
                    {
                        this.state.cart.map(item => {
                            return (
                                <div className="cart-item" >
                                    <div>
                                        <img src={item.image} alt="s" width="100px" />
                                    </div>
                                    <div style={{ width: "200px", marginLeft: "5px" }} >
                                        <div>
                                            {item.title}
                                        </div>
                                        <div className="class-button" style={{ width: "fit-content", color: "#f05f7f" }} onClick={() => { this.deleteItem(item.title) }} >
                                            - DELETE
                                                        </div>
                                        <div style={{ fontSize: "12px", margin: "10px 0px" }} >
                                            <b>Mode:</b> {item.mode}
                                        </div>
                                        <div style={{ fontSize: "12px" }}>
                                            <b>Type:</b> {item.type}
                                        </div>
                                    </div>
                                    <div>
                                        &#8377;{item.price}
                                    </div>
                                </div>
                            )
                        })
                    }
                    <div className="cart-total" >
                        <div>
                            Total:
                        </div>
                        <div>
                            &#8377;600
                        </div>
                    </div>

                    <div>
                        
                    </div>
                    
                </div>
            )
        }

        return (
            <div className="wrap" style={{ height: "100vh", padding: "40px", textAlign: 'center', flexDirection: "column", color: "rgba(0,0,0,0.3)" }}  >
                <div>FIND A BETTER TEACHER FOR BETTER LIFE</div>
                <div style={{ fontSize: "12px" }} >
                    No items in cart
                </div>
            </div>
        )
    }
}

export default Cart

/*
return (
                        <div>
                            {
                                item.map(item => {
                                    return (
                                        <div className="cart-item" >
                                            <div>
                                                <img src={item.image} alt="s" width="100px" />
                                            </div>
                                            <div style={{ width: "200px", marginLeft: "5px" }} >
                                                <div>
                                                    {item.title}
                                                </div>
                                                <div className="class-button" style={{ width: "fit-content", color: "#f05f7f" }} onClick={() => { this.deleteItem(item.title) }} >
                                                    - DELETE
                                                </div>
                                                <div style={{ fontSize: "12px", margin: "10px 0px" }} >
                                                    <b>Mode:</b> {item.mode}
                                                </div>
                                                <div style={{ fontSize: "12px" }}>
                                                    <b>Type:</b> {item.type}
                                                </div>
                                            </div>
                                            <div>
                                                &#8377;{item.price}
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )
 */