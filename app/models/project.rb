class Project < ApplicationRecord
    validates :name, presence: true
    validates :code, presence: true, uniqueness: true

    has_many :proyect_investigators
    has_many :investigators, through: :proyect_investigators
    has_many :articles, dependent: destroy

    accepts_nested_attributes_for :proyect_investigators, reject_if: ->(attributes) { attributes["name"].blank? }, allow_destroy: true

    #Project toString
    def to_s 
        "#{code} - #{name}"
    end
end
