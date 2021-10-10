class CreateMoves < ActiveRecord::Migration[6.1]
  def change
    create_table :moves do |t|
      t.string :name
      t.integer :frame_data

      t.timestamps
    end
  end
end
