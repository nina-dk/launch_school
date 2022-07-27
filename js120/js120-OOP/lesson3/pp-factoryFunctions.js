//1

/*
1. All objects that are created using a factory function get a full copy of all
the methods which is reduntant and memory-consuming.
2. There is no way to determine whether an object was created using a factory
function to know what its "type" is.
*/

//2
function makeObj() {
  return {
    propA: 10,
    propB: 20
  };
}

//3
function createInvoice(services) {
  return {
    phone: services?.phone || 3000,
    internet: services?.internet || 5500,
    total () {
      return this.phone + this.internet;
    }
  };
}

function invoiceTotal(invoices) {
  let total = 0;

  for (let index = 0; index < invoices.length; index += 1) {
    total += invoices[index].total();
  }

  return total;
}

let invoices = [];
invoices.push(createInvoice());
invoices.push(createInvoice({ internet: 6500 }));
invoices.push(createInvoice({ phone: 2000 }));
invoices.push(createInvoice({
  phone: 1000,
  internet: 4500,
}));

console.log(invoiceTotal(invoices)); // 31000

//4
function createPayment(services = {}) {
  return {
    phone: services.phone || 0,
    internet: services.internet || 0,
    amount: services.amount || null,
    total() {
      return this.amount || this.phone + this.internet;
    }
  };
}

function paymentTotal(payments) {
  return payments.reduce((sum, payment)  => sum + payment.total(), 0);
}

let payments = [];
payments.push(createPayment());
payments.push(createPayment({
  internet: 6500,
}));

payments.push(createPayment({
  phone: 2000,
}));

payments.push(createPayment({
  phone: 1000,
  internet: 4500,
}));

payments.push(createPayment({
  amount: 10000,
}));

console.log(paymentTotal(payments));      // => 24000

//5
function createInvoice(services) {
  return {
    phone: services?.phone || 3000,
    internet: services?.internet || 5500,
    totalPayments: 0,

    addPayment(payment) {
      this.totalPayments += payment.total();
    },
  
    addPayments(payments) {
      payments.forEach(this.addPayment, this);
    },

    total () {
      return this.phone + this.internet;
    },

    amountDue() {
      return this.total() - this.totalPayments;
    }
  };
}

let invoice = createInvoice({
  phone: 1200,
  internet: 4000,
});

let payment1 = createPayment({ amount: 2000 });
let payment2 = createPayment({
  phone: 1000,
  internet: 1200
});

let payment3 = createPayment({ phone: 1000 });

invoice.addPayment(payment1);
invoice.addPayments([payment2, payment3]);
console.log(invoice.amountDue());       // this should return 0