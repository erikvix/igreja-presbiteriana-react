using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using veiculosForm;
using Velsync;

namespace VelSync
{
    public partial class Velsync_agendamento : Form
    {
        Agendamento agendamento = new Agendamento();
        Cliente cliente = new Cliente();
        Funcionario funcionario = new Funcionario();
        Servico servico = new Servico();
        public Velsync_agendamento()
        {
            InitializeComponent();
        }
        
        private void limpar()
        {
            txt_data.Text = string.Empty;
            txt_fp.Text = string.Empty;
            txt_hora.Text = string.Empty;
            txt_servico.Text = string.Empty;
        }
        private void atualizarGrid(MySqlDataReader temp, DataGridView dtg)
        {
            DataTable dt = new DataTable();
            dt.Load(temp);
            dtg.DataSource = dt;
        }

        private void Velsync_agendamento_Load(object sender, EventArgs e)
        {
            fillComboBox(txt_servico);
            atualizarGrid(cliente.listarCliente(), dtg_cliente);
            atualizarGrid(agendamento.listarAgendamentoPosCadastro(), dtg_agendamento);
        }

        private void btn_agendar_Click(object sender, EventArgs e)
        {
            try
            {

            agendamento.Data = txt_data.Text;
            agendamento.Forma_pagamento = txt_fp.Text;
            agendamento.Hora = txt_hora.Text;
            agendamento.Status = txt_status.Text;
            agendamento.Id_servico = servico.Id_servico;
            agendamento.Id_funcionario = 1;
            agendamento.Id_cliente = 1;
            agendamento.Id_servico = 1;
            agendamento.cadastrarAgendamento();
            MessageBox.Show("agendamento cadastrado com sucesso!");
            limpar();
            atualizarGrid(agendamento.listarAgendamentoPosCadastro(), dtg_agendamento);
            }catch(Exception ex)
            {
                MessageBox.Show(ex.Message);
            }
        }

        private void checkBox1_CheckedChanged(object sender, EventArgs e)
        {

        }

        private void txt_data_TextChanged(object sender, EventArgs e)
        {

        }
        public void fillComboBox(ComboBox comboBox)
        {
            List<string> nomesServicos = servico.buscarDado("nome_servico");

            comboBox.Items.Clear();
            comboBox.Items.AddRange(nomesServicos.ToArray());
        }

        private void button1_Click(object sender, EventArgs e)
        {
            if (txt_data.Text == string.Empty &&
                txt_fp.Text == string.Empty &&
                txt_hora.Text == string.Empty &&
                txt_status.Text == string.Empty &&
                txt_servico.Text == string.Empty)
            {
                MessageBox.Show("Preencha todos os campos");
            }else
            {
            try
            {
                agendamento.Data = txt_data.Text;
                agendamento.Forma_pagamento = txt_fp.Text;
                agendamento.Hora = txt_hora.Text;
                agendamento.Status = txt_status.Text;
                agendamento.Id_servico = servico.Id_servico;
                agendamento.Id_funcionario = 1;
                agendamento.Id_cliente = 1;
                agendamento.Id_servico = 1;
                agendamento.cadastrarAgendamento();
                MessageBox.Show("agendamento cadastrado com sucesso!");
                limpar();
                atualizarGrid(agendamento.listarAgendamentoPosCadastro(), dtg_agendamento);
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message);
            }
            }
        }

        private void dtg_agendamento_CellDoubleClick(object sender, DataGridViewCellEventArgs e)
        {
            int row;
            row = dtg_agendamento.CurrentRow.Index;

            try
            {
                MessageBox.Show(dtg_agendamento[0, row].Value.ToString());
                txt_data.Text = dtg_agendamento[4, row].Value.ToString();
                txt_status.Text = dtg_agendamento[5, row].Value.ToString();
                txt_fp.Text = dtg_agendamento[6, row].Value.ToString();
                txt_hora.Text = dtg_agendamento[7, row].Value.ToString();
                txt_servico.Text = dtg_agendamento[1,row].Value.ToString();
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message);
            }
        }
    }
}
