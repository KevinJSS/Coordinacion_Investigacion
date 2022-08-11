class CreateRecords < ActiveRecord::Migration[7.0]
  def change
    create_table :records do |t|
      t.integer :number, null: false, unique: true
      t.date :date, null:false

      t.timestamps
    end
  end
end
