class Investigator < ApplicationRecord
    validates :id_card, presence: true, uniqueness: true
    validates :first_name, presence: true
    validates :last_name, presence: true
    validates :email, presence: true, uniqueness: true

    before_create { self.email = email.downcase }
    before_create { self.id_card = id_card.strip }

    has_many :proyect_investigators
    has_many :Projects, through: :proyect_investigators

    #Investigator ToString
    def to_s
        "#{id_card} - #{first_name} #{last_name}"
    end
end
