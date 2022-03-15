<template>
	<div>
		<b-card title="Contractor Information">
			<b-card-text>
				<div v-if="!loan.third_party_contacts.contractor">
					<em>No contractor company selected</em>
				</div>
				<table class="table table-stripe" v-else>
					<tr>
						<th>Name</th>
						<td>
            <ejs-inplaceeditor 
                ref="editObj" id="inplace_editor" 
                mode="Inline" type="Text" 
                :showButtons="false" 
                :value="`${loan.third_party_contacts.contractor.name}`" 
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
                :value="`${loan.third_party_contacts.contractor.contact}`" 
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
                :value="`${loan.third_party_contacts.contractor.address}`" 
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
                :value="`${loan.third_party_contacts.contractor.city}`" 
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
                :value="`${loan.third_party_contacts.contractor.state}`" 
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
                :value="`${loan.third_party_contacts.contractor.email}`" 
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
                :value="`${loan.third_party_contacts.contractor.phone}`" 
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