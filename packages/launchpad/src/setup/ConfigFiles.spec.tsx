import {
  ConfigFilesFragmentDoc,
} from '../generated/graphql-test'
import ConfigFiles from './ConfigFiles.vue'

describe('<ConfigFile />', () => {
  beforeEach(() => {
    cy.mountFragment(ConfigFilesFragmentDoc, {
      render: (gql) => {
        return (
          <div>
            <ConfigFiles gql={gql} />
          </div>
        )
      },
    })
  })

  it('playground', () => {
    cy.contains('button', 'Continue').should('exist')
  })
})