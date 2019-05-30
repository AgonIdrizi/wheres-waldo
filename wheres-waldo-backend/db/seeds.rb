# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
characters_data = [
  { puzzle: "very easy",
    characters: [ { name: "waldo", top_left_x: 808, top_left_y: 651,
                    width: 26, height: 53 },
                  { name: "wenda", top_left_x: 821, top_left_y: 534,
                    width: 14, height: 19 },
                  { name: "wizard", top_left_x: 1120, top_left_y: 680,
                    width: 15, height: 21 } ] 
  },
  { puzzle: "easy",
    characters: [ { name: "waldo", top_left_x: 679, top_left_y: 347,
                    width: 28, height: 39 },
                  { name: "wizard", top_left_x: 773, top_left_y: 348,
                    width: 40, height: 51 },
                  { name: "odlaw", top_left_x: 421, top_left_y: 351,
                    width: 15, height: 59 } ] 
  },
  { puzzle: "normal",
    characters: [ { name: "waldo", top_left_x: 654, top_left_y: 263,
                    width: 18, height: 35 },
                  { name: "wenda", top_left_x: 864, top_left_y: 292,
                    width: 12, height: 17 },
                  { name: "wizard", top_left_x: 200, top_left_y: 245,
                    width: 18, height: 31 } ] 
  },
  { puzzle: "hard",
    characters: [ { name: "waldo", top_left_x: 885, top_left_y: 248,
                    width: 15, height: 23 },
                  { name: "wenda", top_left_x: 477, top_left_y: 482,
                    width: 10, height: 16 },
                  { name: "wizard", top_left_x: 524, top_left_y: 266,
                    width: 12, height: 23 },
                  { name: "odlaw", top_left_x: 382, top_left_y: 492,
                    width: 12, height: 22 } ] 
  },
  { puzzle: "very hard",
    characters: [ { name: "waldo", top_left_x: 591, top_left_y: 137,
                    width: 17, height: 31 },
                  { name: "wenda", top_left_x: 477, top_left_y: 524,
                    width: 12, height: 31 },
                  { name: "wizard", top_left_x: 847, top_left_y: 45,
                    width: 15, height: 19 },
                  { name: "odlaw", top_left_x: 381, top_left_y: 519,
                    width: 11, height: 31 } ] 
  },
  { puzzle: "insane",
    characters: [ { name: "waldo", top_left_x: 591, top_left_y: 200,
                    width: 14, height: 33 },
                  { name: "wenda", top_left_x: 351, top_left_y: 182,
                    width: 10, height: 23 },
                  { name: "wizard", top_left_x: 961, top_left_y: 615,
                    width: 26, height: 48 },
                  { name: "odlaw", top_left_x: 368, top_left_y: 411,
                    width: 12, height: 25 } ] 
  }
]

# Clear characters tables so all characters on all boards are recreated
Character.delete_all

characters_data.each do |one_character_data|
  puzzle = Puzzle.find_or_create_by!(title: one_character_data[:puzzle])
  
  one_character_data[:characters].each do |character|
    puzzle.characters.create!( { name:       character[:name], 
                                top_left_x: character[:top_left_x], 
                                top_left_y: character[:top_left_y],
                                width:      character[:width], 
                                height:     character[:height] } )
  end
end
