require "application_system_test_case"

class InvestigatorsTest < ApplicationSystemTestCase
  setup do
    @investigator = investigators(:one)
  end

  test "visiting the index" do
    visit investigators_url
    assert_selector "h1", text: "Investigators"
  end

  test "should create investigator" do
    visit investigators_url
    click_on "New investigator"

    fill_in "email", with: @investigator.email
    fill_in "First name", with: @investigator.first_name
    fill_in "Id card", with: @investigator.id_card
    fill_in "Last name", with: @investigator.last_name
    click_on "Create Investigator"

    assert_text "Investigator was successfully created"
    click_on "Back"
  end

  test "should update Investigator" do
    visit investigator_url(@investigator)
    click_on "Edit this investigator", match: :first

    fill_in "email", with: @investigator.email
    fill_in "First name", with: @investigator.first_name
    fill_in "Id card", with: @investigator.id_card
    fill_in "Last name", with: @investigator.last_name
    click_on "Update Investigator"

    assert_text "Investigator was successfully updated"
    click_on "Back"
  end

  test "should destroy Investigator" do
    visit investigator_url(@investigator)
    click_on "Destroy this investigator", match: :first

    assert_text "Investigator was successfully destroyed"
  end
end
