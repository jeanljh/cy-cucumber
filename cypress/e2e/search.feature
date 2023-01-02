Feature: Search function via main search and trip finder

    @main-search
    Scenario Outline: Search with main search
        When I click search text field
        When I enter '<location>' and press ENTER key
        Then I can see result title contains '<location>'

        Examples:
            | location  |
            | Singapore |
            | Malaysia  |

    @trip-finder
    Scenario Outline: Search with trip finder
        When I enter '<location>'
        When I select '<date>'
        When I click Take Me There
        Then I can see result title contains '<location>' and '<date>'
        Then I can see departure accordion has year <year> and month '<month>'

        Examples:
            | location  | date            | year | month |
            | Singapore | November - 2024 | 2024 | NOV   |
            | Malaysia  | December - 2024 | 2024 | DEC   |