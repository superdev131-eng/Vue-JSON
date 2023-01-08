<template>
  <div class="Crew-data">
    <div class="crew-tab">Form Setting</div>
    <div class="Crew-data-header">
      <div class="User-acc float-right mr-30">
        <img class="mr-7" src="../assets/img/search.png" alt="" />
        <img class="mr-7" src="../assets/img/setting.png" alt="" />
        <img src="../assets/img/avatar.png" alt="" />
        <span class="h5">User</span>
        <img src="../assets/img/down-arrow.png" alt="" />
      </div>
      <div class="breadcrump-acc">
        <div class="crew-breadcrump">
          <svg
            class="mr-5"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.34933 2.14171L9.3425 2.14779L9.33613 2.15435L4.1653 7.48064C4.02653 7.6201 3.953 7.79482 3.953 7.99199C3.953 8.18891 4.02605 8.36458 4.15774 8.5108L4.15761 8.51092L4.16412 8.51762L9.33612 13.8456L9.34249 13.8522L9.34933 13.8583C9.48862 13.9822 9.65704 14.0465 9.8435 14.0465C10.0391 14.0465 10.2108 13.9702 10.3483 13.8328C10.4857 13.6953 10.562 13.5236 10.562 13.328C10.562 13.133 10.4862 12.9617 10.3495 12.8244L5.64567 7.99999L10.3495 3.17556C10.4862 3.03832 10.562 2.86699 10.562 2.67199C10.562 2.47642 10.4857 2.30466 10.3483 2.16721C10.2108 2.02977 10.0391 1.95349 9.8435 1.95349C9.65704 1.95349 9.48862 2.01779 9.34933 2.14171Z"
              fill="#303133"
              stroke="#303133"
              stroke-width="0.5"
            />
          </svg>
          <span>
            <span class="breadcrump-title"> Form Menu </span>
            <svg
              width="8"
              height="32"
              viewBox="0 0 8 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 32V0L8 16L0 32Z" fill="#EBEDF0" />
            </svg>
          </span>
          <span>
            <svg
              width="8"
              height="32"
              viewBox="0 0 8 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 32V0H0L8 16L0 32H8Z" fill="#EBEDF0" />
            </svg>

            <span class="breadcrump-title1"> CPD </span>
            <svg
              width="8"
              height="32"
              viewBox="0 0 8 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 32V0L8 16L0 32Z" fill="#EBEDF0" />
            </svg>
          </span>
          <span>
            <svg
              width="8"
              height="32"
              viewBox="0 0 8 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 32V0H0L8 16L0 32H8Z" fill="#EBEDF0" />
            </svg>

            <span class="breadcrump-title1"> CREW </span>
            <svg
              width="8"
              height="32"
              viewBox="0 0 8 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 32V0L8 16L0 32Z" fill="#EBEDF0" />
            </svg>
          </span>
        </div>
      </div>
      <h1 class="crew-data-h1">Crew Data (STCW Certificate)</h1>
    </div>
    <div class="crew-btn-container">
      <button class="search-btn">Save</button>
      <button class="reset-btn">Cancel</button>
    </div>
    <div class="crew-data-form">
      <h4 class="form-h4">Profile</h4>
      <hr class="form-hr" />
      <form action="">
        <div class="row">
          <div class="col-md-6">
            <label for="">Vessel</label>
            <select class="w-100 crew-form-input" name="" id="">
              <option value="">Please Select</option>
            </select>
          </div>
          <div class="col-md-6">
            <label for="">Embarkation Place</label>
            <input
              type="text"
              name=""
              class="w-100 crew-form-input"
              placeholder="Suez canal, Egypt"
              id=""
            />
          </div>
        </div>
        <div class="row mt-30">
          <div class="col-md-6">
            <label for="">Vessel</label>
            <select class="w-100 crew-form-input" name="" id="">
              <option value="">Please Select</option>
            </select>
          </div>
          <div class="col-md-6">
            <label for="">Embarkation Place</label>
            <input
              type="text"
              name=""
              class="w-100 crew-form-input"
              placeholder="Suez canal, Egypt"
              id=""
            />
          </div>
        </div>
        <h4 class="form-h4 mt-50">Crew Certificate</h4>
        <hr class="form-hr" />
        <div class="row">
          <div class="col-md-4">
            <label for="">Passport</label>
            <input
              type="text"
              name=""
              class="w-100 crew-form-input"
              placeholder="Please enter"
              id=""
            />
          </div>
          <div class="col-md-4">
            <label for="">Exp. Date</label>
            <input
              type="date"
              name=""
              class="w-100 crew-form-input"
              placeholder="Select a date"
              id=""
            />
          </div>
        </div>
        <div class="row mt-30">
          <div class="col-md-4">
            <label for="">Seaman Book</label>
            <input
              type="text"
              name=""
              class="w-100 crew-form-input"
              placeholder="Please enter"
              id=""
            />
          </div>
          <div class="col-md-4">
            <label for="">Exp. Date</label>
            <input
              type="date"
              name=""
              class="w-100 crew-form-input"
              placeholder="Select a date"
              id=""
            />
          </div>
        </div>
        <div class="row mt-30">
          <div class="col-md-4">
            <label for="">Certificate Required of Flag State</label>
            <input
              type="text"
              name=""
              class="w-100 crew-form-input"
              placeholder="Please enter"
              id=""
            />
          </div>
          <div class="col-md-4">
            <label for="">Exp. Date</label>
            <input
              type="date"
              name=""
              class="w-100 crew-form-input"
              placeholder="Select a date"
              id=""
            />
          </div>
        </div>
        <div class="row mt-30">
          <div class="col-md-4">
            <label for="">GMDSS</label>
            <input
              type="text"
              name=""
              class="w-100 crew-form-input"
              placeholder="Please enter"
              id=""
            />
          </div>
          <div class="col-md-4">
            <label for="">Exp. Date</label>
            <input
              type="date"
              name=""
              class="w-100 crew-form-input"
              placeholder="Select a date"
              id=""
            />
          </div>
        </div>
        <div class="row mt-30">
          <div class="col-md-4">
            <label for="">SSO/DSD</label>
            <input
              type="text"
              name=""
              class="w-100 crew-form-input"
              placeholder="Please enter"
              id=""
            />
          </div>
          <div class="col-md-4">
            <label for="">Exp. Date</label>
            <input
              type="date"
              name=""
              class="w-100 crew-form-input"
              placeholder="Select a date"
              id=""
            />
          </div>
        </div>
        <div class="row mt-30">
          <div class="col-md-4">
            <label for="">Certificate of crew's Nation</label>
            <input
              type="text"
              name=""
              class="w-100 crew-form-input"
              placeholder="Please enter"
              id=""
            />
          </div>
          <div class="col-md-4">
            <label for="">Exp. Date</label>
            <input
              type="date"
              name=""
              class="w-100 crew-form-input"
              placeholder="Select a date"
              id=""
            />
          </div>
        </div>
        <div class="row mt-30">
          <div class="col-md-4">
            <label for="">Flag Medical Cert Exp.Date</label>
            <input
              type="date"
              name=""
              class="w-100 crew-form-input"
              placeholder="Please enter"
              id=""
            />
          </div>
        </div>
        <div class="row mt-30">
          <div class="col-md-4">
            <label for="">Yellow Fever Cert Exp.Date</label>
            <input
              type="date"
              name=""
              class="w-100 crew-form-input"
              placeholder="Please enter"
              id=""
            />
          </div>
        </div>
        <div class="row mt-30">
          <div class="col-md-4">
            <label for="">Flag Medical Cert Exp.Date</label>
            <input
              type="date"
              name=""
              class="w-100 crew-form-input"
              placeholder="Please enter"
              id=""
            />
          </div>
        </div>
        <div class="row mt-30">
          <div class="col-md-4">
            <label for="">Nation Medical Exp.Date</label>
            <input
              type="date"
              name=""
              class="w-100 crew-form-input"
              placeholder="Please enter"
              id=""
            />
          </div>
        </div>
        <div class="row mt-30">
          <div class="col-md-4">
            <label for="">ECDIS Completed Time</label>
            <input
              type="date"
              name=""
              class="w-100 crew-form-input"
              placeholder="Please enter"
              id=""
            />
          </div>
        </div>
        <h4 class="form-h4 mt-50">Uploads</h4>
        <hr class="form-hr" />
        <div>
          <label for="">Attachment</label>
          <input
            type="file"
            name="file-input"
            id="file-input"
            class="file-input__input"
          />
          <label class="file-input__label" for="file-input">
            <span>Upload file</span></label
          >
        </div>
      </form>
    </div>
  </div>
</template>

<style></style>
