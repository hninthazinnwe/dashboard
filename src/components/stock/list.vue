<template>
    <div class="container">
        <h2>Stock</h2>
        <div class="row g-2 my-4">
          <div class="col-auto">
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#stockCreate">
              New Stock
            </button>
            <div class="modal fade" tabindex="-1" id="stockCreate" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <createStock/>
            </div>
            <div class="modal fade" tabindex="-2" id="stockEdit" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <editStock
                :stockData="stock"
              >
              </editStock>
            </div>
          </div>
          <div class="col-auto">
            <input class="form-control" placeholder="Search..." @keydown.enter="searchStock" v-model="search">
          </div>
        </div>
        <div class="row mx-2">
          <h4>Stock List</h4>
          <table class="table table-striped table-hover table-bordered">
            <thead class="table-dark">
              <tr>
                <th>No</th>
                <th>Description</th>
                <th>Price</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr
                :key="i"
                v-for="(row, i) in stocks"
                :data="row"
              >
                <td>{{i+1}}</td>
                <td>{{row.product_name}}</td>
                <td>{{row.product_price}}</td>
                <td>
                  <button type="button" class="btn btn-small btn-primary" data-bs-toggle="modal" data-bs-target="#stockEdit" @click="editStock(row)">
                    <i class="far fa-edit"></i>Edit
                  </button>
                  <button type="button" class="btn btn-small btn-danger ms-3"  @click="deleteStock(row.product_id)">
                    <i class="far fa-trash-alt"></i>Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table> 
        </div>
    </div>
</template>
<script>
import createStock from '../stock/create.vue'
import editStock from '../stock/edit.vue'

export default {
  name: 'stockList',
  components: {
    createStock,
    editStock
  },
  data:() => ({
    stocks: [],
    stock: {},
    search: ''
  }),
  methods: {
    deleteStock(id){
      this.$store.dispatch('deleteStock', id)
    },
    editStock(stock){
      this.stock = stock
    },
    searchStock(){
      this.stocks = this.$store.dispatch('searchStock', this.search)
    }
  },
  async created() {
      await this.$store.dispatch('getStockList')
      this.stocks = this.$store.state.stock.stocks
  }
}
</script>
<style scoped>
    .container {
      height:721px;
      margin-left: 100px;
    }
    table {
      min-width: 500px;
      min-height: 500px !important;
      overflow: scroll;
    }
    table:first-child {
      width: 100px;
    }
    table:last-child {
      width: 40em;
    }
</style>