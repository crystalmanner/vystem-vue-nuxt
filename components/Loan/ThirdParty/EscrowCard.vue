<template>
	<div>
		<b-card title="Escrow Information">
			<b-card-text>
				<div v-if="!loan.third_party_contacts.escrow_company">
					<em>No escrow company selected</em>
				</div>
				<table class="table table-stripe" v-else>
					<tr>
						<th>Name</th>
						<td>
              <ejs-inplaceeditor 
                ref="editObj" id="inplace_editor" 
                mode="Inline" type="Text" 
                :showButtons="false" 
                :value="`${loan.third_party_contacts.escrow_company.name}`" 
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
                :value="`${loan.third_party_contacts.escrow_company.contact}`" 
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
                :value="`${loan.third_party_contacts.escrow_company.address}`" 
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
                :value="`${loan.third_party_contacts.escrow_company.city}`" 
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
                :value="`${loan.third_party_contacts.escrow_company.state}`" 
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
                :value="`${loan.third_party_contacts.escrow_company.email}`" 
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
                :value="`${loan.third_party_contacts.escrow_company.phone}`" 
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