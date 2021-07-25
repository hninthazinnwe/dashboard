<template>
  <div>
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Edit Stock</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-md-4">
              <label for="">Name</label>
            </div>
            <div class="col-md-6">
              <input type="text"  v-model="stock.product_name">
            </div>
          </div>
          <div class="row mt-2">
            <div class="col-md-4">
              <label for="">Price</label>
            </div>
            <div class="col-md-6">
              <input type="text"  v-model="stock.product_price">
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" @click="updateStock">Update</button>
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'stockCreate',
  data:() => ({
    stock: {}
  }),
  props: ['stockData'],
  methods: {
    async updateStock() {
      await this.$store.dispatch('updateStock', this.stock);
      location.reload();
    }
  },
  watch: {
    stockData(){
      this.stock = this.stockData
    }
  }
}
</script>
<style>

</style>