class CreateArticles < ActiveRecord::Migration[7.0]
  def change
    create_table :articles do |t|
      t.integer :number, null: false
      t.integer :record_id, null: false
      t.integer :project_id, null: false

      t.timestamps
    end

    add_foreign_key :articles, :records, column: :record_id, on_delete: :cascade
    add_foreign_key :articles, :projects, column: :project_id
  end
end
