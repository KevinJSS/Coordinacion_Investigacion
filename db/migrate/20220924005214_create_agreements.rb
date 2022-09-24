class CreateAgreements < ActiveRecord::Migration[7.0]
  def change
    create_table :agreements do |t|
      t.integer :agreementNumber
      t.integer :article_id
      t.text :description

      t.timestamps
    end

    add_foreign_key :agreements, :articles, column: :article_id, on_delete: :cascade
  end
end
