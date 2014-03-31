class CreateMemberActivities < ActiveRecord::Migration
  def change
    create_table :member_activities do |t|
      t.references :member, index: true
      t.references :activity, index: true
      t.integer :freq

      t.timestamps
    end
  end
end