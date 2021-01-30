import React, { useState, useEffect } from "react";
import { Table } from "semantic-ui-react";
import { getOrder, getOrders } from "../api";
import PageFooter from "./PageFooter";
/* import PageHeader from "./PageHeader"; */

export default function UserOrder() {
  const [orders, setOrders] = useState();
  const [adminOrders, setAdminOrders] = useState();

  useEffect(() => {
    getOrder()
      .then((response) => {
        console.log("response", response);
        setOrders(response.order);
      })
      .catch((error) => {
        setOrders(error.message);
      });
    getOrders()
      .then((response) => {
        console.log("response", response);
        setAdminOrders(response.allOrders);
      })
      .catch((error) => {
        setAdminOrders(error.message);
      });
  }, []);

  const totalArr = [];
  console.log("total arr", totalArr);
  console.log("orders", orders);

  return (
    <>
      {(orders && orders.cartArr.length > 0) || adminOrders ? (
        <>
          {/*     <PageHeader /> */}
          {JSON.parse(localStorage.getItem("user")).role === "admin" ? (
            adminOrders !== undefined ? (
              <Table celled>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Order Number</Table.HeaderCell>
                    <Table.HeaderCell>Cart Number</Table.HeaderCell>
                    <Table.HeaderCell>User Id</Table.HeaderCell>
                    <Table.HeaderCell>Cart</Table.HeaderCell>
                    <Table.HeaderCell>Total</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  {adminOrders.cartArr.map((cart) => {
                    console.log("map cart", cart);
                    return (
                      <Table.Row>
                        <Table.Cell>{cart.rows.id}</Table.Cell>
                        <Table.Cell>{cart.rows.cartId}</Table.Cell>
                        <Table.Cell>{cart.rows.userId}</Table.Cell>
                        <Table.Cell>
                          {cart.cart.products.map((product) => {
                            totalArr.push(parseFloat(product.price));
                            console.log("product", product);
                            return (
                              <div>
                                {product.name} - ${product.price} x{" "}
                                {product.count}
                              </div>
                            );
                          })}
                        </Table.Cell>
                        <Table.Cell>${cart.total}</Table.Cell>
                      </Table.Row>
                    );
                  })}
                </Table.Body>
              </Table>
            ) : (
              <h1>Loading</h1>
            )
          ) : orders !== undefined ? (
            <Table celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Order Number</Table.HeaderCell>
                  <Table.HeaderCell>Cart Number</Table.HeaderCell>
                  <Table.HeaderCell>Cart</Table.HeaderCell>
                  <Table.HeaderCell>Total</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {orders.cartArr.map((cart) => {
                  console.log("map cart", cart);
                  return (
                    <Table.Row>
                      <Table.Cell>{cart.rows.id}</Table.Cell>
                      <Table.Cell>{cart.rows.cartId}</Table.Cell>
                      <Table.Cell>
                        {cart.cart.products.map((product) => {
                          totalArr.push(parseFloat(product.price));
                          console.log("product", product);
                          return (
                            <div>
                              {product.name} - ${product.price} x{" "}
                              {product.count}
                            </div>
                          );
                        })}
                      </Table.Cell>
                      <Table.Cell>${cart.total}</Table.Cell>
                    </Table.Row>
                  );
                })}
              </Table.Body>
            </Table>
          ) : (
            <h1>Loading</h1>
          )}

          <PageFooter />
        </>
      ) : (
        <>
          {" "}
          {/*    <PageHeader /> <h1>No orders yet...</h1>  */}
          <PageFooter />{" "}
        </>
      )}
    </>
  );
}
