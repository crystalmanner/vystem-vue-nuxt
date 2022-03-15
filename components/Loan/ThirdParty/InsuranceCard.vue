<template>
	<div>
		<b-card title="Insurance Information">
			<b-card-text>
				<div v-if="!loan.third_party_contacts.insurance">
					<em>No insurance company selected</em>
					<b-alert variant="secondary">Todo: Need to debug</b-alert>
				</div>
				<table class="table table-stripe" v-else>
					<tr>
						<th>Name</th>
						<td>
              <ejs-inplaceeditor 
                ref="editObj" id="inplace_editor" 
                mode="Inline" type="Text" 
                :showButtons="false" 
                :value="`${loan.third_party_contacts.insurance.name}`" 
                submitOnEnter= "true">
              </ejs-inplaceeditor>
            </td>
					</tr>
					<tr>
						<th>Contact</th>
						<td>
              <ejs-inplaceeditor 
                ref="editObj" id="inplace_editor" 
                mode="Inline" type="Text" 
                :showButtons="false" 
                :value="`${loan.third_party_contacts.insurance.contact}`" 
                submitOnEnter= "true">
              </ejs-inplaceeditor>
            </td>
					</tr>
					<tr>
						<th>Address</th>
						<td>
              <ejs-inplaceeditor 
                ref="editObj" id="inplace_editor" 
                mode="Inline" type="Text" 
                :showButtons="false" 
                :value="`${loan.third_party_contacts.insurance.address}`" 
                submitOnEnter= "true">
              </ejs-inplaceeditor>
             </td>
					</tr>
					<tr>
						<th>City</th>
						<td>
              <ejs-inplaceeditor 
                ref="editObj" id="inplace_editor" 
                mode="Inline" type="Text" 
                :showButtons="false" 
                :value="`${loan.third_party_contacts.insurance.city}`" 
                submitOnEnter= "true">
              </ejs-inplaceeditor>
            </td>
					</tr>
					<tr>
						<th>State</th>
						<td>
              <ejs-inplaceeditor 
                ref="editObj" id="inplace_editor" 
                mode="Inline" type="Text" 
                :showButtons="false" 
                :value="`${loan.third_party_contacts.insurance.state}`" 
                submitOnEnter= "true">
              </ejs-inplaceeditor>
            </td>
					</tr>
					<tr>
						<th>Email</th>
						<td>
              <ejs-inplaceeditor 
                ref="editObj" id="inplace_editor" 
                mode="Inline" type="Text" 
                :showButtons="false" 
                :value="`${loan.third_party_contacts.insurance.email}`" 
                submitOnEnter= "true">
              </ejs-inplaceeditor>
            </td>
					</tr>
					<tr>
						<th>Phone</th>
						<td>
              <ejs-inplaceeditor 
                ref="editObj" id="inplace_editor" 
                mode="Inline" type="Text" 
                :showButtons="false" 
                :value="`${loan.third_party_contacts.insurance.phone}`" 
                submitOnEnter= "true">
              </ejs-inplaceeditor>
            </td>
					</tr>
				</table>
			</b-card-text>
		</b-card>
	</div>
</template>

<script>
export default {
	props: ["loan"]
};
</script>

<style lang="scss" scoped>
</style>