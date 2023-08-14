/* tslint:disable:no-unused-variable */

import { TestBed, inject } from "@angular/core/testing";
import { CommInfoService } from "./commInfo.service";

describe("Service: CommInfo", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommInfoService],
    });
  });

  it("should ...", inject([CommInfoService], (service: CommInfoService) => {
    expect(service).toBeTruthy();
  }));
});
