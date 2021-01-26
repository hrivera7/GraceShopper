import React, { useState, useEffect } from "react";
import { Table } from "semantic-ui-react";
import { getOrderById, getOrders } from "../api";
import PageFooter from "./PageFooter";
import PageHeader from "./PageHeader";

export default function UserOrder() {
  const [orders, setOrders] = useState();
  const [adminOrders, setAdminOrders] = useState();

  useEffect(() => {
    getOrderById()
      .then((response) => {
        console.log("response", response.order);
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

  /*  if (adminOrders) {
    console.log("admin orders", adminOrders);
  } */
  const totalArr = [];
  console.log("total arr", totalArr);

  return (
    <>
      <PageHeader />
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
                        return (
                          <div>
                            {product.name} - ${product.price}
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
            <Table.Row>
              <Table.Cell>{orders.rows[0].id}</Table.Cell>
              <Table.Cell>{orders.rows[0].cartId}</Table.Cell>
              <Table.Cell>
                {orders.cartArr[0].products.map((product) => {
                  console.log("product", product);
                  totalArr.push(parseFloat(product.price));
                  return (
                    <div>
                      {product.name} - ${product.price}
                    </div>
                  );
                })}
              </Table.Cell>
              <Table.Cell>
                ${totalArr.reduce((a, b) => a + b, 0).toFixed(2)}
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      ) : (
        <h1>Loading</h1>
      )}

      <PageFooter />
    </>
  );
}
