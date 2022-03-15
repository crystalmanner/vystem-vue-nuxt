<template>
  <div>
    <b-row>
      <b-col cols="12">
        <table class="table table-striped">
          <thead>
            <th data-sortable="true">Item</th>
            <th data-sortable="true">Status</th>
          </thead>
          <tbody>
            <tr>
              <td>
                Front (tight shot)
                <sup class="text-danger">*</sup>
              </td>
              <td>
                <div v-if="missing_photo.has_pic_front_tight">
                  <span class="label label-fill label-success">Uploaded</span>
                </div>
                <div v-else>
                  <span class="label label-fill label-default">Missi ng</span>
                </div>
              </td>
            </tr>

            <tr>
              <td>
                Front (wide shot)
                <sup class="text-danger">*</sup>
              </td>
              <td>
                <div v-if="missing_photo.has_pic_front_wide">
                  <span class="label label-fill label-success">Uploaded</span>
                </div>
                <div v-else>
                  <span class="label label-fill label-default">Missing</span>
                </div>
              </td>
            </tr>

            <tr>
              <td>Down The Street</td>
              <td>
                <div v-if="missing_photo.has_pic_down_the_street">
                  <span class="label label-fill label-success">Uploaded</span>
                </div>
                <div v-else>
                  <span class="label label-fill label-default">Missing</span>
                </div>
              </td>
            </tr>

            <tr>
              <td>Backyard/Deck/Patio</td>
              <td>
                <div v-if="missing_photo.has_pic_backyard">
                  <span class="label label-fill label-success">Uploaded</span>
                </div>
                <div v-else>
                  <span class="label label-fill label-default">Missing</span>
                </div>
              </td>
            </tr>

            <tr>
              <td>Kitchen</td>
              <td>
                <div v-if="missing_photo.has_pic_kitchen">
                  <span class="label label-fill label-success">Uploaded</span>
                </div>
                <div v-else>
                  <span class="label label-fill label-default">Missing</span>
                </div>
              </td>
            </tr>

            <tr>
              <td>Main Livingroom</td>
              <td>
                <div v-if="missing_photo.has_pic_main_living_room">
                  <span class="label label-fill label-success">Uploaded</span>
                </div>
                <div v-else>
                  <span class="label label-fill label-default">Missing</span>
                </div>
              </td>
            </tr>

            <tr>
              <td>Main Bathroom</td>
              <td>
                <div v-if="missing_photo.has_pic_main_bathroom">
                  <span class="label label-fill label-success">Uploaded</span>
                </div>
                <div v-else>
                  <span class="label label-fill label-default">Missing</span>
                </div>
              </td>
            </tr>

            <tr>
              <td>Master Bedroom</td>
              <td>
                <div v-if="missing_photo.has_pic_master_bedroom">
                  <span class="label label-fill label-success">Uploaded</span>
                </div>
                <div v-else>
                  <span class="label label-fill label-default">Missing</span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  props: ["loan"],
  data() {
    return {
      missing_photo: []
    };
  },
  created() {
    this.currentUrl = window.location.pathname;
    this.$axios
      .get(`/v1/loans/missing-photos/` + this.loan.loan_detail.id)
      .then(response => {
        // JSON responses are automatically parsed.
        this.missing_photo = response.data[0].data;
      })
      .catch(e => {
        this.errors.push(e);
      });
  }
};
</script>

<style lang="scss" scoped>
</style>