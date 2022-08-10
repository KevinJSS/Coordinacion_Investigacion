class CreateInvestigators < ActiveRecord::Migration[7.0]
  def change
    create_table :investigators do |t|
      t.string :id_card, null: false, unique: true
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.string :email, unique: true

      t.timestamps
    end
  end
end
