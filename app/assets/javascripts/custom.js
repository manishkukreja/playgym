<%= form_for(@member, html: {onsubmit: 'return checkForm($("#exampleInputEmail4"), $("#exampleInputEmail5"))'}) do |f| %>
  <% if @member.errors.any? %>
    <div id="error_explanation" class="form-group">
      <h2><%= pluralize(@member.errors.count, "error") %> prohibited this member from being saved:</h2>
      <ul>
      <% @member.errors.full_messages.each do |msg| %>
        <li><%= msg %></li>
      <% end %>
      </ul>
    </div>
  <% end %>
  <div class="form-group">
    <%= f.label "First Name", for: "exampleInputEmail1" %>
    <%= f.text_field :first_name, class: "form-control", id: "exampleInputEmail1", placeholder: "Enter First Name", autofocus: true %>
  </div>
  <div class="form-group">
    <%= f.label "Last Name", for: "exampleInputEmail2" %>
    <%= f.text_field :last_name, class: "form-control", id: "exampleInputEmail2", placeholder: "Enter Last Name" %>
  </div>
  <div class="form-group">
    <%= f.label "Email", for: "exampleInputEmail3" %>
    <%= f.email_field :email, class: "form-control", id: "exampleInputEmail3", placeholder: "Enter Email", required: true %>
  </div>
  <div class="form-group">
    <%= f.label "Phone1", for: "exampleInputPhone1" %>
    <%= f.text_field :phone1, class: "form-control", id: "exampleInputPhone", placeholder: "Enter Phone1" %>
  </div>
   <div class="form-group">
    <%= f.label "Phone2", for: "exampleInputPhone2" %>
    <%= f.text_field :phone2, class: "form-control", id: "exampleInputPhone", placeholder: "Enter Phone2" %>
  </div>
  <div class="form-group">
    <%= f.label "Date of Birth", for: "exampleInputDOB" %>
    <%= f.date_field :dob, class: "form-control", id: "exampleInputDOB", placeholder: "Enter DOB" %>
  </div>
  <div class="form-group">
    <%= f.label "Membership Type" %>
    <% for membership in Membership.all %>
      <%= f.radio_button('membership_type',membership.id, class: "membership_type", required: true) %><%= membership.membership_type %>
    <%end%>
  </div>
  <div class="form-group">
    <%= f.label "Start Date", for: "exampleInputEmail4" %>
    <%= f.date_field :start_date, class: "form-control", id: "exampleInputEmail4", placeholder: "Enter Start Date", required: true, title: "Select membership type first", disabled: true %>
  </div>
  <div class="form-group">
    <%= f.label "End Date", for: "exampleInputEmail5" %>
    <%= f.date_field :end_date, class: "form-control", id: "exampleInputEmail5", placeholder: "Enter End Date", required: true, title: "Select start date first", disabled: true %>
  </div>
    <div class="form-group">
        <table class="table table-striped">
            <thead>
                <tr><th>Activity</th>
                    <th>3 Per Week</th>
                    <th>4 Per Week</th>
                    <th>5 Per Week</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><span class='deselect_football' onclick='$('input[type=radio][name=football]:checked').attr('checked', false);'><i class="fa fa-times-circle-o"></i></span> Football
                    <td><input type="radio" name="football" value="2500">2500</td>
                    <td><input type="radio" name="football" value="3000">3000</td>
                    <td><input type="radio" name="football" value="3500">3500</td>
                    <td id="football">0</td>            
                </tr>
                <tr>
                    <td><span class='deselect_tennis' onclick='$('input[type=radio][name=tennis]:checked').attr('checked', false);'><i class="fa fa-times-circle-o"></i></span> Tennis
                    <td><input type="radio" name="tennis" value="2500">2500</td>
                    <td><input type="radio" name="tennis" value="3000">3000</td>
                    <td><input type="radio" name="tennis" value="3500">3500</td>
                    <td id="tennis">0</td>                    
                </tr>
                <tr>
                    <td><span class='deselect_yoga' onclick='$('input[type=radio][name=yoga]:checked').attr('checked', false);'><i class="fa fa-times-circle-o"></i></span> Yoga
                    <td><input type="radio" name="yoga" value="400">400</td>
                    <td><input type="radio" name="yoga" value="800">800</td>
                    <td><input type="radio" name="yoga" value="1200">1200</td>
                    <td id="yoga">0</td>
                </tr>
                <tr>
                    <td><span class='deselect_karate' onclick='$('input[type=radio][name=karate]:checked').attr('checked', false);'><i class="fa fa-times-circle-o"></i></span> Karate
                    <td><input type="radio" name="karate" value="400">400</td>
                    <td><input type="radio" name="karate" value="800">800</td>
                    <td><input type="radio" name="karate" value="1200">1200</td>
                    <td id="karate">0</td>                    
                </tr>
                <tr>
                    <td><span class='deselect_gymnastics' onclick='$('input[type=radio][name=gymnastics]:checked').attr('checked', false);'><i class="fa fa-times-circle-o"></i></span> Gymnastics
                    <td><input type="radio" name="gymnastics" value="750">750</td>
                    <td><input type="radio" name="gymnastics" value="1500">1500</td>
                    <td><input type="radio" name="gymnastics" value="2000">2000</td>
                    <td id="gymnastics">0</td>            
                </tr>
                <tr>
                    <td><span class='deselect_art_craft' onclick='$('input[type=radio][name=art_craft]:checked').attr('checked', false);'><i class="fa fa-times-circle-o"></i></span> Art & Craft
                    <td><input type="radio" name="art_craft" value="500">500</td>
                    <td><input type="radio" name="art_craft" value="1000">1000</td>
                    <td><input type="radio" name="art_craft" value="1500">1500</td>
                    <td id="#art_craft">0</td>
                </tr>
                <tr>
                    <td><span class='deselect_water_play' onclick='$('input[type=radio][name=water_play]:checked').attr('checked', false);'><i class="fa fa-times-circle-o"></i></span> Water Play
                    <td><input type="radio" name="water_play" value="500">500</td>
                    <td><input type="radio" name="water_play" value="1000">1000</td>
                    <td><input type="radio" name="water_play" value="1500">1500</td>
                    <td id="#water_play">0</td>                    
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    </div>
  <div class="form-group">
    <%= f.submit "Submit", class: "btn btn-primary" %>
  </div>
<% end %>
