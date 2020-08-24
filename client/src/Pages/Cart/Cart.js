import React, { Component } from 'react'
import getUser from '../../Database/getUer'
import firebase, { rdb } from '../../firebase'
import '../../CSS/Pages/Cart.css'
import SimpleBottomNavigation from '../../Components/BottomNavBar'

function loadScript(src) {
    return new Promise((resolve) => {
        const script = document.createElement('script')
        script.src = src
        script.onload = () => {
            resolve(true)
        }
        script.onerror = () => {
            resolve(false)
        }
        document.body.appendChild(script)
    })
}

export class Cart extends Component {

    state = {
        cart: null
    }

    displayRazorpay = async () => {
        const sendAmount = firebase.functions().httpsCallable('payment');
        const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

        if (!res) {
            alert('Razorpay SDK failed to load. Are you online?')
            return
        }

        const data = await fetch('https://us-central1-pidgin-ds.cloudfunctions.net/payment', { method: 'POST' }).then((t) =>
            t.json()
        )

        const options = {
            key: "rzp_test_YkaGnE7ZDrAhTW",
            currency: 'INR',
            amount: data.amount,
            order_id: data.id,
            name: 'Pidgin',
            description: '',
            handler: function (response) {
                alert(response.razorpay_payment_id)
                alert(response.razorpay_order_id)
                alert(response.razorpay_signature)
            },
            prefill: {
                name: "this.state.user.displayName",
                email: "this.state.user.email",
                phone_number: ''
            }
        }
        const paymentObject = new window.Razorpay(options)
        paymentObject.open()
    }

    componentDidMount() {
        getUser().then(user => {
            if (user) {
                rdb.ref().child("carts").child(user[3]).on('value', snap => {
                    this.setState({ user: user })
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
                    <SimpleBottomNavigation value="Cart" />
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

                    <div className="wrap" >
                        <button className="pay-button" onClick={this.displayRazorpay} >
                            CHECKOUT
                        </button>
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
                <div className="wrap" >
                    <button className="pay-button" onClick={this.displayRazorpay} >
                        CHECKOUT
                    </button>
                </div>
            </div>
        )
    }
}

export default Cart
