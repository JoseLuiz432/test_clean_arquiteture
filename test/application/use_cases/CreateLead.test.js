const Lead = require('../../../lib/domain/Lead');
const LeadRepository = require('../../../lib/domain/LeadRepository');
const mockLeadRepository = new LeadRepository();
const CreateLead = require('../../../lib/application/use_cases/CreateLead');

test('should resolve with the newly persisted lead (augmented with an ID)', async () => {
  // given
  const persistedLead = new Lead(
    123, 7557239024, 'John', 11999999999, 
    'Rua teste de maio', 'john.doe@email.com', 
    {'latitude': 120, 'longitude': 120}, 2
    );
  mockLeadRepository.persist = jest.fn(() => persistedLead);

  // when
  const lead = await CreateLead(
    7557239024, 'John', 11999999999, 
    'Rua teste de maio', 'john.doe@email.com', 
    {'latitude': 120, 'longitude': 120}, 2, 
    { leadRepository: mockLeadRepository });

  // then
  expect(mockLeadRepository.persist).toHaveBeenCalledWith(new Lead(
    null, 7557239024, 'John', 11999999999, 
    'Rua teste de maio', 'john.doe@email.com', 
    {'latitude': 120, 'longitude': 120}, 2
    ));
    
  expect(lead).toEqual(persistedLead);
});