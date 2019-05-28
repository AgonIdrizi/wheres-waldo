# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_05_28_191112) do

  create_table "characters", force: :cascade do |t|
    t.string "name"
    t.integer "top_left_x"
    t.integer "top_left_y"
    t.integer "width"
    t.integer "height"
    t.integer "puzzle_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["puzzle_id"], name: "index_characters_on_puzzle_id"
  end

  create_table "players", force: :cascade do |t|
    t.integer "puzzle_id"
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["puzzle_id"], name: "index_players_on_puzzle_id"
  end

  create_table "puzzles", force: :cascade do |t|
    t.string "title"
    t.string "imgUrl"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "scores", force: :cascade do |t|
    t.date "time"
    t.integer "player_id"
    t.integer "puzzle_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["player_id"], name: "index_scores_on_player_id"
    t.index ["puzzle_id"], name: "index_scores_on_puzzle_id"
  end

end
