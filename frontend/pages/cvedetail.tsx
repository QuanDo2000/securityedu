import Head from 'next/head';
import { ChangeEvent, useState } from 'react';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';

type FilterType = {
  hasExp: number;
  opexec: number;
  opovfl: number;
  opcsrf: number;
  opfile: number;
  oppriv: number;
  opsqli: number;
  opcxss: number;
  opdirt: number;
  opmemc: number;
  ophttp: number;
  opbyps: number;
  opinfo: number;
  opddos: number;
  order: number;
  cvssScoreMin: number;
};

const defaultFilter: FilterType = {
  hasExp: 0,
  opexec: 0,
  opovfl: 0,
  opcsrf: 0,
  opfile: 0,
  oppriv: 0,
  opsqli: 0,
  opcxss: 0,
  opdirt: 0,
  opmemc: 0,
  ophttp: 0,
  opbyps: 0,
  opinfo: 0,
  opddos: 0,
  order: 1,
  cvssScoreMin: 0,
};

const sortText = ['', 'Publish Date', 'Last Update Date', 'CVE ID'];

const buildLink = (filter: FilterType) => {
  return `http://www.cvedetails.com/widget.php?numrows=30&vendor_id=0&product_id=0&version_id=0&hasexp=${filter.hasExp}&opec=${filter.opexec}&opov=${filter.opovfl}&opcsrf=${filter.opcsrf}&opfileinc=${filter.opfile}&opgpriv=${filter.oppriv}&opsqli=${filter.opsqli}&opxss=${filter.opcxss}&opdirt=${filter.opdirt}&opmemc=${filter.opmemc}&ophttprs=${filter.ophttp}&opbyp=${filter.opbyps}&opginf=${filter.opinfo}&opdos=${filter.opddos}&orderby=${filter.order}&cvssscoremin=${filter.cvssScoreMin}`;
};

const CveDetail = () => {
  const [currFilter, setCurrFilter] = useState(defaultFilter);
  const [sortBy, setSortBy] = useState('');

  return (
    <Layout>
      <Head>
        <title>CVE Details</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>CVE Details</h1>
        <FormGroup row sx={{ mb: '1rem' }}>
          <FormControlLabel
            control={
              <Switch
                size="small"
                checked={currFilter.hasExp === 1}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setCurrFilter({
                    ...currFilter,
                    hasExp: currFilter.hasExp === 0 ? 1 : 0,
                  });
                }}
              />
            }
            label="Vulnerability with exploits"
          />
          <FormControlLabel
            control={
              <Switch
                size="small"
                checked={currFilter.opexec === 1}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setCurrFilter({
                    ...currFilter,
                    opexec: currFilter.opexec === 0 ? 1 : 0,
                  });
                }}
              />
            }
            label="Code execution"
          />
          <FormControlLabel
            control={
              <Switch
                size="small"
                checked={currFilter.opovfl === 1}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setCurrFilter({
                    ...currFilter,
                    opovfl: currFilter.opovfl === 0 ? 1 : 0,
                  });
                }}
              />
            }
            label="Overflows"
          />
          <FormControlLabel
            control={
              <Switch
                size="small"
                checked={currFilter.opcsrf === 1}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setCurrFilter({
                    ...currFilter,
                    opcsrf: currFilter.opcsrf === 0 ? 1 : 0,
                  });
                }}
              />
            }
            label="Cross Site Request Forgery"
          />
          <FormControlLabel
            control={
              <Switch
                size="small"
                checked={currFilter.opfile === 1}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setCurrFilter({
                    ...currFilter,
                    opfile: currFilter.opfile === 0 ? 1 : 0,
                  });
                }}
              />
            }
            label="File inclusion"
          />
          <FormControlLabel
            control={
              <Switch
                size="small"
                checked={currFilter.oppriv === 1}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setCurrFilter({
                    ...currFilter,
                    oppriv: currFilter.oppriv === 0 ? 1 : 0,
                  });
                }}
              />
            }
            label="Gain privilege"
          />
          <FormControlLabel
            control={
              <Switch
                size="small"
                checked={currFilter.opsqli === 1}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setCurrFilter({
                    ...currFilter,
                    opsqli: currFilter.opsqli === 0 ? 1 : 0,
                  });
                }}
              />
            }
            label="SQL injection"
          />
          <FormControlLabel
            control={
              <Switch
                size="small"
                checked={currFilter.opcxss === 1}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setCurrFilter({
                    ...currFilter,
                    opcxss: currFilter.opcxss === 0 ? 1 : 0,
                  });
                }}
              />
            }
            label="Cross site scripting"
          />
          <FormControlLabel
            control={
              <Switch
                size="small"
                checked={currFilter.opdirt === 1}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setCurrFilter({
                    ...currFilter,
                    opdirt: currFilter.opdirt === 0 ? 1 : 0,
                  });
                }}
              />
            }
            label="Directory traversal"
          />
          <FormControlLabel
            control={
              <Switch
                size="small"
                checked={currFilter.opmemc === 1}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setCurrFilter({
                    ...currFilter,
                    opmemc: currFilter.opmemc === 0 ? 1 : 0,
                  });
                }}
              />
            }
            label="Memory corruption"
          />
          <FormControlLabel
            control={
              <Switch
                size="small"
                checked={currFilter.ophttp === 1}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setCurrFilter({
                    ...currFilter,
                    ophttp: currFilter.ophttp === 0 ? 1 : 0,
                  });
                }}
              />
            }
            label="HTTP response splitting"
          />
          <FormControlLabel
            control={
              <Switch
                size="small"
                checked={currFilter.opbyps === 1}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setCurrFilter({
                    ...currFilter,
                    opbyps: currFilter.opbyps === 0 ? 1 : 0,
                  });
                }}
              />
            }
            label="Bypass something"
          />
          <FormControlLabel
            control={
              <Switch
                size="small"
                checked={currFilter.opinfo === 1}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setCurrFilter({
                    ...currFilter,
                    opinfo: currFilter.opinfo === 0 ? 1 : 0,
                  });
                }}
              />
            }
            label="Gain information"
          />
          <FormControlLabel
            control={
              <Switch
                size="small"
                checked={currFilter.opddos === 1}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setCurrFilter({
                    ...currFilter,
                    opddos: currFilter.opddos === 0 ? 1 : 0,
                  });
                }}
              />
            }
            label="Denial of service"
          />
        </FormGroup>
        <Box
          sx={{ display: 'flex', justifyContent: 'space-evenly', mb: '1rem' }}
        >
          <FormGroup sx={{ width: '45%' }}>
            <InputLabel id="sort-label">Sort By</InputLabel>
            <Select
              size="small"
              labelId="sort-label"
              id="sort-by"
              value={currFilter.order}
              label="Sort By"
              onChange={(e: SelectChangeEvent<HTMLInputElement>) => {
                setCurrFilter({
                  ...currFilter,
                  order: Number(e.target.value),
                });
              }}
            >
              <MenuItem value={1}>Publish Date</MenuItem>
              <MenuItem value={2}>Last Update Date</MenuItem>
              <MenuItem value={3}>CVE ID</MenuItem>
            </Select>
          </FormGroup>
          <FormGroup sx={{ width: '45%' }}>
            <InputLabel id="score-label">CVSS Score {'>='}</InputLabel>
            <Select
              size="small"
              labelId="score-label"
              id="cvss-score"
              value={currFilter.cvssScoreMin}
              label="CVSS Score >="
              onChange={(e: SelectChangeEvent<HTMLInputElement>) => {
                setCurrFilter({
                  ...currFilter,
                  cvssScoreMin: Number(e.target.value),
                });
              }}
            >
              <MenuItem value={0}>0</MenuItem>
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={6}>6</MenuItem>
              <MenuItem value={7}>7</MenuItem>
              <MenuItem value={8}>8</MenuItem>
              <MenuItem value={9}>9</MenuItem>
              <MenuItem value={10}>10</MenuItem>
            </Select>
          </FormGroup>
        </Box>
        <iframe src={buildLink(currFilter)} width="100%" height="500px" />
      </article>
    </Layout>
  );
};

export default CveDetail;
