const LeadRepository = require('../../../lib/domain/LeadRepository');
const mockLeadRepository = new LeadRepository();
const DeleteLead = require('../../../lib/application/use_cases/DeleteLead');

test('should resolve (without result)', async () => {
  // given
  mockLeadRepository.remove = jest.fn(() => true);

  // when
  await DeleteLead(123, { leadRepository: mockLeadRepository });

  // then
  expect(mockLeadRepository.remove).toHaveBeenCalledWith(123);
});